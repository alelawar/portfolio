import { createHash } from "node:crypto"

const MAX_REQUESTS_PER_WINDOW = 6
const REQUEST_WINDOW_MS = 60_000
const MAX_CONCURRENT_PER_CLIENT = 2
const MAX_GLOBAL_CONCURRENT_REQUESTS = 25
const STREAM_AUTO_RELEASE_MS = 45_000

const requestTimes = new Map<string, number[]>()
const clientActiveRequests = new Map<string, number>()
let totalActiveRequests = 0

function clientKey(req: Request) {
  // Check headers in order of proxy trustworthiness
  const ip =
    req.headers.get("x-vercel-forwarded-for")?.trim() ??
    req.headers.get("cf-connecting-ip")?.trim() ??
    req.headers.get("x-real-ip")?.trim() ??
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown"

  const userAgent = req.headers.get("user-agent") ?? "none"

  return createHash("sha256")
    .update(`${ip}:${userAgent}`)
    .digest("hex")
    .slice(0, 24)
}

export type AiRateLimitResult =
  | { allowed: true; release: () => void }
  | { allowed: false; retryAfterSeconds: number }

export function acquireAiRequest(req: Request): AiRateLimitResult {
  const now = Date.now()

  // High-ceiling global safeguard to prevent resource exhaustion
  if (totalActiveRequests >= MAX_GLOBAL_CONCURRENT_REQUESTS) {
    return { allowed: false, retryAfterSeconds: 2 }
  }

  const key = clientKey(req)

  // Per-client concurrency check prevents 1 user from blocking all other visitors
  const currentClientActive = clientActiveRequests.get(key) ?? 0
  if (currentClientActive >= MAX_CONCURRENT_PER_CLIENT) {
    return { allowed: false, retryAfterSeconds: 1 }
  }

  // Sliding-window request count per client
  const recent = (requestTimes.get(key) ?? []).filter(
    (timestamp) => now - timestamp < REQUEST_WINDOW_MS
  )

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((REQUEST_WINDOW_MS - (now - recent[0])) / 1000)
      ),
    }
  }

  recent.push(now)
  requestTimes.set(key, recent)

  // Periodic pruning of old timestamps
  if (requestTimes.size > 10_000) {
    for (const [storedKey, timestamps] of requestTimes) {
      if (
        timestamps.every((timestamp) => now - timestamp >= REQUEST_WINDOW_MS)
      ) {
        requestTimes.delete(storedKey)
        clientActiveRequests.delete(storedKey)
      }
    }
  }

  // Increment both global and per-client active counters
  totalActiveRequests += 1
  clientActiveRequests.set(key, currentClientActive + 1)

  let released = false
  const release = () => {
    if (released) return
    released = true
    totalActiveRequests = Math.max(0, totalActiveRequests - 1)
    const active = clientActiveRequests.get(key) ?? 1
    if (active <= 1) {
      clientActiveRequests.delete(key)
    } else {
      clientActiveRequests.set(key, active - 1)
    }
  }

  // Auto-release timer prevents permanent counter leakage if streams hang
  const timeoutId = setTimeout(() => {
    release()
  }, STREAM_AUTO_RELEASE_MS)

  return {
    allowed: true,
    release: () => {
      clearTimeout(timeoutId)
      release()
    },
  }
}
