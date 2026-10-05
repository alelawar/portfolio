import type { TechStack } from "../types/tech-stack"

// Icon SVG paths sourced from https://simpleicons.org
export const TECH_STACK: TechStack[] = [
  // AI / ML
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    iconId: "python",
    categories: ["AI / ML"],
  },
  {
    key: "tensorflow",
    title: "TensorFlow",
    href: "https://www.tensorflow.org/",
    iconId: "tensorflow",
    categories: ["AI / ML"],
  },
  {
    key: "pandas",
    title: "Pandas",
    href: "https://pandas.pydata.org/",
    iconId: "pandas",
    categories: ["AI / ML"],
  },
  {
    key: "numpy",
    title: "NumPy",
    href: "https://numpy.org/",
    iconId: "numpy",
    categories: ["AI / ML"],
  },
  {
    key: "langchain",
    title: "LangChain",
    href: "https://www.langchain.com/",
    iconId: "langchain",
    categories: ["AI / ML"],
  },
  {
    key: "claude",
    title: "Claude",
    href: "https://claude.ai/",
    iconId: "claude",
    categories: ["AI / ML"],
  },
  {
    key: "chatgpt",
    title: "ChatGPT",
    href: "https://chatgpt.com/",
    iconId: "chatgpt",
    categories: ["AI / ML"],
  },
  {
    key: "gemini",
    title: "Gemini",
    href: "https://gemini.google.com/",
    iconId: "gemini",
    categories: ["AI / ML"],
  },

  // Frontend
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    iconId: "js",
    categories: ["Frontend"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    iconId: "typescript",
    categories: ["Frontend"],
  },
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    iconId: "react",
    categories: [ "Frontend"],
  },
  {
    key: "vue",
    title: "Vue.js",
    href: "https://vuejs.org/",
    iconId: "vuedotjs",
    categories: ["Frontend"],
  },

  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    iconId: "nextjs2",
    categories: ["Frontend"],
  },
  {
    key: "electron",
    title: "Electron",
    href: "https://www.electronjs.org/",
    iconId: "electron",
    categories: ["Frontend"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    iconId: "tailwindcss",
    categories: ["Frontend"],
  },

  // Backend
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    iconId: "nodejs",
    categories: ["Backend"],
  },
  {
    key: "pnpm",
    title: "PNPM",
    href: "https://pnpm.io/",
    iconId: "pnpm",
    categories: ["Backend"],
  },
  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    iconId: "mysql",
    categories: ["Backend"],
  },
  {
    key: "go",
    title: "Go",
    href: "https://go.dev/",
    iconId: "go",
    categories: ["Backend"],
  },
  {
    key: "laravel",
    title: "Laravel",
    href: "https://laravel.com/",
    iconId: "laravel",
    categories: ["Backend"],
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    iconId: "postgresql",
    categories: ["Backend"],
  },

  // DevOps / Cloud
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    iconId: "docker",
    categories: ["DevOps / Cloud"],
  },
  {
    key: "google-cloud",
    title: "Google Cloud",
    href: "https://cloud.google.com/",
    iconId: "googlecloud",
    categories: ["DevOps / Cloud"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com/",
    iconId: "github",
    categories: ["DevOps / Cloud"],
  },
  {
    key: "linux",
    title: "Linux",
    href: "https://www.linux.org/",
    iconId: "linux",
    categories: ["DevOps / Cloud"],
  },
  {
    key: "vscode",
    title: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
    iconId: "vscode",
    categories: ["DevOps / Cloud"],
  },
]

export const STACK_CATEGORIES = [
  "AI / ML",
  "Frontend",
  "Backend",
  "DevOps / Cloud",
]