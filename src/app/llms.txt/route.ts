import { SITE_INFO } from "@/config/site"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"
import { PROJECTS } from "@/features/portfolio/data/projects"
import { USER } from "@/features/portfolio/data/user"
import { decodeEmail } from "@/utils/string"

export const dynamic = "force-static"
export const revalidate = false

function buildLlmsTxt(): string {
  const email = decodeEmail(USER.email)
  const baseUrl = SITE_INFO.url

  const projectLines = PROJECTS.map(
    (project) => `- [${project.title}](${baseUrl}/projects/${project.id}): ${project.tagline}`
  ).join("\n")

  const experienceLines = EXPERIENCES.map((exp) => {
    const pos = exp.positions[0]
    const roleInfo = pos ? `${pos.title} (${pos.employmentType})` : "Software Engineer"
    return `- [${exp.companyName}](${baseUrl}/#experience): ${roleInfo}.`
  }).join("\n")

  return `# ${USER.displayName}

> ${USER.seoDescription ?? USER.bio}

## Core Projects
${projectLines}

## Professional Experience
${experienceLines}

## Site Navigation & Resources
- [Home](${baseUrl}/): Main portfolio, profile summary, experiences, and technical overview.
- [All Projects](${baseUrl}/projects): Full project archive.

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
