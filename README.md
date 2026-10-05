# Portfolio Template

> A bare-bones personal portfolio template, stripped down to placeholder content. Built with Next.js 16, React 19, and Tailwind CSS v4.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.8 |
| Styling | Tailwind CSS v4 |
| UI Primitives | Radix UI |
| Deployment | Vercel |

## What's in here

This is a trimmed-down copy of a full-featured portfolio site. All personal
content (bio, experience, projects, awards, certifications, publications,
social links) has been replaced with realistic **placeholders** — edit the
files under `src/features/portfolio/data/` to make it yours.

## Integrations (disabled by default)

The original template also ships with an AI chat widget, a contact form,
a live GitHub contributions graph, and a Medium blog feed. All of that code
is still here as a scaffold, but it's **switched off** so the site runs with
zero configuration. Everything is controlled from one file:

```ts
// src/config/features.ts
export const FEATURES = {
  AI_CHAT: false,          // Groq-powered chat widget
  CONTACT_EMAIL: false,    // Resend-powered contact form
  AI_FORMAT_EMAIL: false,  // Groq-assisted contact message formatting
  MEDIUM_BLOG: false,      // Live Medium RSS feed on /blog
  GITHUB_LIVE_DATA: false, // Live GitHub contributions + star/follower counts
}
```

Flip a flag to `true`, add the matching API key to `.env.local` (see
`.env.example`), and that feature comes back online.

## Getting Started

**Prerequisites:** Node.js ≥ 22, pnpm ≥ 9

```bash
pnpm install
cp .env.example .env.local   # only needed if you enable an integration above
pnpm dev
```

Then start editing:

1. `src/features/portfolio/data/user.ts` — your name, bio, links
2. `src/features/portfolio/data/experiences.tsx` — work & education history
3. `src/features/portfolio/data/projects.ts` — your projects
4. `src/features/portfolio/data/{awards,certifications,publications,social-links}.*` — the rest
5. `src/config/site.ts` — site URL, GitHub/X/Medium usernames
6. `public/image/profile.webp`, `public/banner.jpg`, `public/projects/*`, `public/logos/*` — swap in your own images

## Scripts

```bash
pnpm dev          # Dev server
pnpm build        # Production build
pnpm check-types  # TypeScript check
pnpm lint         # ESLint
pnpm test         # Unit tests (Vitest)
```

## License

[MIT](./LICENSE)
