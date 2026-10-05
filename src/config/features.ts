/**
 * Central feature flags for integrations that need an external API key or
 * external network call. Everything is OFF by default in this template so
 * it runs immediately without any `.env.local` setup.
 *
 * The original implementation for every flagged feature is still in place
 * (see the file(s) noted below) - flip the flag to `true` once you've added
 * the matching API key to `.env.local` and filled in your own data.
 */
export const FEATURES = {
  /** AI chat widget (streaming answers via Groq). See src/app/api/chat/route.ts */
  AI_CHAT: false,
  /** Contact form email delivery via Resend. See src/app/api/contact/route.ts */
  CONTACT_EMAIL: false,
  /** AI-assisted contact message formatting via Groq. See src/app/api/format-email/route.ts */
  AI_FORMAT_EMAIL: false,
  /** Blog posts pulled live from a Medium RSS feed. See src/features/blog/lib/fetch-medium-posts.ts */
  MEDIUM_BLOG: false,
  /** Live GitHub contributions graph + follower/star counts. See src/features/portfolio/data/github-*.ts */
  GITHUB_LIVE_DATA: true,
} as const
