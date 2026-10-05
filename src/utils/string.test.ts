import { describe, expect, it } from "vitest"

import { USER } from "@/features/portfolio/data/user"

import { decodeEmail } from "./string"

describe("decodeEmail", () => {
  it("decodes a base64-encoded email address", () => {
    expect(decodeEmail("bmFtYWthbXVAZXhhbXBsZS5jb20=")).toBe(
      "namakamu@example.com"
    )
  })

  it("decodes the value stored in the USER data", () => {
    expect(decodeEmail(USER.email)).toContain("@example.com")
  })
})
