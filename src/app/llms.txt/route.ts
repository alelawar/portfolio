import { SITE_INFO } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { decodeEmail } from "@/utils/string"

export const dynamic = "force-static"
export const revalidate = false

function buildLlmsTxt(): string {
  const email = decodeEmail(USER.email)
  const baseUrl = SITE_INFO.url

  return `# ${USER.displayName}

> ${USER.seoDescription ?? USER.bio}

## Core Projects
- [Project One](${baseUrl}/projects/project-one): Sample full-stack web application (placeholder).
- [Project Two](${baseUrl}/projects/project-two): Sample team project (placeholder).
- [Project Three](${baseUrl}/projects/project-three): Sample backend API service (placeholder).

## Professional Experience
- [Perusahaan Contoh](${baseUrl}/#experience): Software Engineer Intern (placeholder role).
- [Startup Contoh](${baseUrl}/#experience): Frontend Developer (placeholder role).

## Site Navigation & Resources
- [Home](${baseUrl}/): Main portfolio, profile summary, experiences, and technical overview.
- [All Projects](${baseUrl}/projects): Full project archive.
- [Blog](${baseUrl}/blog): Articles and writing.
- [Gallery](${baseUrl}/gallery): Visual documentation of projects and events.

## Contact & Profiles
- [Portfolio Website](${baseUrl}): ${baseUrl}
- [GitHub](${USER.sameAs.find((url) => url.includes("github")) ?? ""})
- [LinkedIn](${USER.sameAs.find((url) => url.includes("linkedin")) ?? ""})
- [Email](mailto:${email}): ${email}

## Optional
- [Full Comprehensive Knowledge Base](${baseUrl}/llms-full.txt): Complete, unabridged profile details.
`
}

export function GET(): Response {
  return new Response(buildLlmsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
    },
  })
}
