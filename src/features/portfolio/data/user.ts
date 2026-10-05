import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Ahmad",
  lastName: "Lesmana",
  displayName: "Ahmad Lesmana",
  username: "alelawar",
  gender: "male",
  pronouns: "he/him",

  bio: "I'm Ahmad Lesmana, a Full-Stack Developer focused on building practical web applications, SaaS products, and AI-powered solutions with clean interfaces and reliable backend systems.",

  bioId:
    "Saya Ahmad Lesmana, seorang Full-Stack Developer yang berfokus membangun aplikasi web praktis, produk SaaS, dan solusi berbasis AI dengan antarmuka yang rapi serta sistem backend yang andal.",

  flipSentences: [
    "Full Stack Developer",
    "Frontend Engineer",
    "Backend Developer",
    "AI Enthusiast",
  ],
  flipSentencesId: [
    "Pengembang Full Stack",
    "Frontend Engineer",
    "Backend Developer",
    "Penggemar AI",
  ],

  address: "Indonesia",
  email: "YWhtYWRsZXNtYW5hNzg4QGdtYWlsLmNvbQ==", // base64 of namakamu@example.com
  phone: "+62 831-4404-2644",
  website: "https://www.yourdomain.dev",

  jobTitle: "Full Stack Developer",
  seoTitle: "Ahmad Lesmana | Full Stack Developer",
  seoDescription:
    "I'm Ahmad Lesmana, a full-stack developer from Indonesia. I build practical web applications and software products.",

  jobs: [
    {
      title: "Software Engineering Student",
      company: "IPB University",
      website: "https://sv.ipb.ac.id/",
      experienceId: "sv-ipb",
    },
  ],

  about: `I'm a Software Engineering student based in Indonesia who enjoys building practical web applications and exploring AI technologies. I work across the stack, from designing databases and building backend systems with Laravel to creating modern interfaces with React and Next.js. I'm also exploring AI through projects involving machine learning, RAG, and agentic systems, with a focus on turning ideas into useful, real-world products.`,
  aboutId: `Saya mahasiswa Teknologi Rekayasa Perangkat Lunak yang berbasis di Indonesia dan senang membangun aplikasi web yang praktis serta mengeksplorasi teknologi AI. Saya terbiasa mengerjakan berbagai bagian dalam pengembangan aplikasi, mulai dari merancang database dan membangun backend dengan Laravel hingga membuat antarmuka modern menggunakan React dan Next.js. Saya juga terus mendalami AI melalui berbagai project seperti machine learning, RAG, dan agentic system, dengan fokus mengubah ide menjadi produk yang benar-benar bermanfaat.`,

  avatar: "/image/pfp.jpeg",
  ogImage: "/image/og.png",
  sameAs: [
    "https://github.com/alelawar",
    "https://linkedin.com/in/ahmad-lesmana-89311b332/",
  ],
  timeZone: "Asia/Jakarta",

  keywords: [
    "Ahmad Lesmana",
    "alelawar",
    "Ahmad Lesmana portfolio",
    "Contoh portfolio",
    "Contoh portfolio website",
    "full stack developer Indonesia",
    "web developer Indonesia",
    "software engineer portfolio",
  ],

  // Full ISO 8601 datetimes: Schema.org dateCreated/dateModified expect a
  // time component, and date-only values trip up structured-data validators.
  dateCreated: "2026-01-01T00:00:00Z",
  dateModified: "2026-01-01T00:00:00Z",
}
