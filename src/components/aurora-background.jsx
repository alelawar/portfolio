"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import AuroraBlack from "./aurora-black"
import AuroraLight from "./aurora-light"

export function AuroraBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return resolvedTheme === "dark" ? <AuroraBlack /> : <AuroraLight />
}