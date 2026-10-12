export type GeminiChatMessage = {
  role: "system" | "user" | "assistant"
  content: string
}

type GeminiStreamChunk = {
  choices?: Array<{
    delta?: {
      content?: unknown
    }
  }>
}

const GEMINI_CHAT_COMPLETIONS_URL =
  "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions"

// Urutan model Gemini: 2.5 Flash -> 2.0 Flash -> 1.5 Flash sebagai fallback
const GEMINI_MODELS = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
] as const

const FRIENDLY_LIMIT_MESSAGE =
  "The chat is busy right now. Please try again shortly."

export class GeminiConfigurationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "GeminiConfigurationError"
  }
}

export class GeminiApiError extends Error {
  constructor(
    message: string,
    readonly status: number
  ) {
    super(message)
    this.name = "GeminiApiError"
  }
}

function getGeminiApiKeys(): string[] {
  const rawKeys = [
    process.env.GEMINI_API_KEY,
    process.env.GEMINI_API_KEY_2,
    process.env.GOOGLE_API_KEY,
  ]
    .filter(Boolean)
    .map((k) => k?.trim())
    .filter((k): k is string => Boolean(k))

  const uniqueKeys = Array.from(new Set(rawKeys))
  if (uniqueKeys.length === 0) {
    throw new GeminiConfigurationError("No Gemini API keys are configured.")
  }
  return uniqueKeys
}

function createTextStream(text: string) {
  const encoder = new TextEncoder()
  return new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(encoder.encode(text))
      controller.close()
    },
  })
}

function extractTextFromChunk(chunk: GeminiStreamChunk) {
  const content = chunk.choices?.[0]?.delta?.content
  if (typeof content === "string") return content
  return ""
}

export function createGeminiTextStream(
  responseBody: ReadableStream<Uint8Array>,
  onComplete?: (outputCharacters: number) => void
) {
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()
  let buffer = ""
  let outputCharacters = 0
  let reader: ReadableStreamDefaultReader<Uint8Array> | undefined

  const enqueue = (
    controller: ReadableStreamDefaultController<Uint8Array>,
    text: string
  ) => {
    outputCharacters += text.length
    controller.enqueue(encoder.encode(text))
  }

  return new ReadableStream<Uint8Array>({
    async start(controller) {
      reader = responseBody.getReader()
      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split("\n")
          buffer = lines.pop() ?? ""

          for (const line of lines) {
            const trimmedLine = line.trim()
            if (!trimmedLine.startsWith("data:")) continue

            const data = trimmedLine.slice(5).trim()
            if (!data || data === "[DONE]") continue

            try {
              const chunk = JSON.parse(data) as GeminiStreamChunk
              const text = extractTextFromChunk(chunk)
              if (text) {
                enqueue(controller, text)
              }
            } catch {
              continue
            }
          }
        }
      } finally {
        onComplete?.(outputCharacters)
        controller.close()
        reader.releaseLock()
      }
    },
    async cancel(reason) {
      await reader?.cancel(reason)
    },
  })
}

async function createGeminiChatStreamForModel(
  messages: GeminiChatMessage[],
  model: string,
  apiKey: string
) {
  let response: Response
  try {
    response = await fetch(GEMINI_CHAT_COMPLETIONS_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages,
        stream: true,
        temperature: 0.3,
        max_tokens: 2048,
      }),
    })
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Network error"
    throw new GeminiApiError(`Network error: ${msg}`, 503)
  }

  if (!response.ok || !response.body) {
    const errorBody = await response.text().catch(() => "")
    throw new GeminiApiError(
      errorBody || `Gemini error ${response.status}`,
      response.status || 500
    )
  }

  return createGeminiTextStream(response.body)
}

export async function createGeminiChatStream(messages: GeminiChatMessage[]) {
  const apiKeys = getGeminiApiKeys()
  let lastError: GeminiApiError | null = null

  for (const model of GEMINI_MODELS) {
    for (const apiKey of apiKeys) {
      try {
        return await createGeminiChatStreamForModel(messages, model, apiKey)
      } catch (error) {
        if (error instanceof GeminiApiError) {
          lastError = error
          console.warn(`Gemini API error on ${model}: ${error.status}`)
          continue
        }
        throw error
      }
    }
  }

  if (lastError?.status === 429) {
    return createTextStream(FRIENDLY_LIMIT_MESSAGE)
  }

  throw lastError ?? new GeminiApiError("Gemini could not process request", 500)
}

export async function createGeminiChatCompletion(
  messages: GeminiChatMessage[],
  options?: {
    response_format?: { type: "json_object" }
    maxCompletionTokens?: number
  }
) {
  const apiKeys = getGeminiApiKeys()
  let lastError: GeminiApiError | null = null

  for (const model of GEMINI_MODELS) {
    for (const apiKey of apiKeys) {
      try {
        const response = await fetch(GEMINI_CHAT_COMPLETIONS_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages,
            stream: false,
            temperature: 0.2,
            max_tokens: options?.maxCompletionTokens ?? 1024,
            ...(options?.response_format?.type === "json_object"
              ? { response_format: { type: "json_object" } }
              : {}),
          }),
        })

        if (!response.ok) {
          const body = await response.text().catch(() => "")
          throw new GeminiApiError(body, response.status || 500)
        }

        const data = await response.json()
        return data.choices?.[0]?.message?.content ?? ""
      } catch (error) {
        if (error instanceof GeminiApiError) {
          lastError = error
          continue
        }
        throw error
      }
    }
  }

  throw lastError ?? new GeminiApiError("Gemini could not process request", 500)
}

