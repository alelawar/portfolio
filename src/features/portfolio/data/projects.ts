import type { Project, ProjectCollaboration } from "../types/projects"

const COLLABORATION: Record<string, ProjectCollaboration> = {
  "rkp-project": {
    ownership: "Solo project",
    ownershipId: "Proyek Individu",
    label: "Solo",
    team: "Solo project",
    role: "Full-Stack Developer",
    roleId: "Full-Stack Developer",
    contributions: [
      "Designed and built the application end-to-end, including the database structure, backend logic, and user interface.",
      "Developed the salary data management, salary slip, and salary recap workflows.",
      "Handled the application development across the database, backend, and frontend layers.",
    ],
    contributionsId: [
      "Merancang dan membangun aplikasi secara end-to-end, termasuk struktur database, logika backend, dan antarmuka pengguna.",
      "Mengembangkan alur pengelolaan data gaji, slip gaji, dan rekap gaji.",
      "Menangani pengembangan aplikasi mulai dari database, backend, hingga frontend.",
    ],
  },

  "archive-project": {
    ownership: "Solo project",
    ownershipId: "Proyek Individu",
    label: "Solo",
    team: "Solo project",
    role: "Full-Stack Developer",
    roleId: "Full-Stack Developer",
    contributions: [
      "Designed and built the application end-to-end, including the database, backend, and user interface.",
      "Developed the digital archive management functionality for organizing employee documents.",
      "Implemented the connection between the application and the VPS-based storage system for archive files.",
    ],
    contributionsId: [
      "Merancang dan membangun aplikasi secara end-to-end, termasuk database, backend, dan antarmuka pengguna.",
      "Mengembangkan fungsi manajemen arsip digital untuk mengorganisir dokumen pegawai.",
      "Mengimplementasikan koneksi antara aplikasi dan sistem penyimpanan berbasis VPS untuk file arsip.",
    ],
  },

  "saynana-project": {
    ownership: "Team project",
    ownershipId: "Proyek Tim",
    label: "Team",
    team: "2-person team",
    role: "Backend Developer",
    roleId: "Backend Developer",
    contributions: [
      "Developed the backend functionality for the e-commerce application.",
      "Worked on the application's microservices to support its backend architecture.",
      "Implemented and maintained backend services as part of a two-person development team.",
    ],
    contributionsId: [
      "Mengembangkan fungsionalitas backend untuk aplikasi e-commerce.",
      "Mengerjakan microservices untuk mendukung arsitektur backend aplikasi.",
      "Mengimplementasikan dan memelihara layanan backend sebagai bagian dari tim pengembangan yang terdiri dari dua orang.",
    ],
  },
  "capstone-project": {
    ownership: "Solo project",
    ownershipId: "Proyek Individu",
    label: "Solo",
    team: "Solo project",
    role: "AI Application Developer",
    roleId: "AI Application Developer",
    contributions: [
      "Built the end-to-end pipeline, from extracting structured restaurant data with an LLM to a conversational recommendation assistant.",
      "Implemented multimodal retrieval with ChromaDB, combining text and image similarity into a single fused ranking.",
      "Developed an MCP server and a ReAct-style host so the LLM can call restaurant tools on its own.",
    ],
    contributionsId: [
      "Membangun pipeline end-to-end, mulai dari ekstraksi data restoran terstruktur dengan LLM hingga asisten rekomendasi percakapan.",
      "Mengimplementasikan multimodal retrieval dengan ChromaDB yang menggabungkan kemiripan teks dan gambar dalam satu peringkat.",
      "Mengembangkan MCP server dan host bergaya ReAct agar LLM dapat memanggil tool restoran secara mandiri.",
    ],
  },
  "wsl-server-manager": {
    ownership: "Solo project",
    ownershipId: "Proyek Individu",
    label: "Solo",
    team: "Solo project",
    role: "Desktop Application Developer",
    roleId: "Desktop Application Developer",
    contributions: [
      "Designed and developed the desktop application interface.",
      "Integrated the Electron desktop environment with a React-based frontend.",
      "Developed the workflow for managing local server processes in WSL.",
    ],
    contributionsId: [
      "Merancang dan mengembangkan antarmuka aplikasi desktop.",
      "Mengintegrasikan lingkungan desktop Electron dengan frontend berbasis React.",
      "Mengembangkan alur kerja untuk mengelola proses server lokal di WSL.",
    ],
  },
}

export const PROJECTS: Project[] = [
  {
    id: "rkp-project",

    title: "RKP IPB — Salary Slip & Salary Recap Management",

    category: "Full Stack",
    categoryId: "Full Stack",

    tagline:
      "An internal full-stack application for managing employee salary data, salary recaps, and salary slip documents at IPB University.",

    taglineId:
      "Aplikasi full-stack internal untuk mengelola data gaji pegawai, rekap gaji, dan dokumen slip gaji di IPB University.",

    seoDescription:
      "RKP-IPB is an internal salary management application built to streamline employee salary data management, salary recaps, and salary slip document generation.",

    year: "2026",

    image: "/projects/rkp/rkp-project.webp",

    period: {
      start: "2026",
    },

    link: "#",

    links: {},

    skills: ["Laravel", "Filament", "PHP", "MySQL", "Tailwind CSS", "REST API"],

    coverSkills: ["Laravel", "Filament", "MySQL"],

    features: [
      "Manage employee salary data and salary-related records.",
      "Generate and manage employee salary slips and salary recap documents.",
      "Provide separate workflows for salary data management and document generation.",
    ],

    featuresId: [
      "Mengelola data gaji pegawai dan data yang berkaitan dengan penggajian.",
      "Membuat dan mengelola dokumen slip gaji serta rekap gaji pegawai.",
      "Menyediakan alur kerja terpisah untuk pengelolaan data gaji dan pembuatan dokumen.",
    ],

    impact: [
      "Streamlines internal salary data management and reduces manual processing of salary-related documents.",
      "Provides a centralized system for managing salary slips and salary recap data.",
    ],

    impactId: [
      "Mempermudah pengelolaan data gaji internal dan mengurangi proses manual dalam pengelolaan dokumen penggajian.",
      "Menyediakan sistem terpusat untuk mengelola data slip gaji dan rekap gaji.",
    ],

    collaboration: COLLABORATION["rkp-project"],

    badge: "Featured Project",
    badgeId: "Proyek Unggulan",

    gallery: [
      "/projects/rkp/rkp-project.webp",
      "/projects/rkp/rkp-project-2.webp",
    ],
  },
  {
    id: "archive-project",

    title: "Archive – Digital Management System",

    category: "Full Stack",
    categoryId: "Full Stack",

    tagline:
      "A full-stack digital archive management application for organizing employee documents with files stored on a dedicated VPS storage server.",

    taglineId:
      "Aplikasi manajemen arsip digital full-stack untuk mengorganisir dokumen pegawai dengan penyimpanan file pada VPS khusus.",

    seoDescription:
      "A digital archive management application for organizing and managing employee documents with file storage connected to a dedicated VPS server.",

    year: "2026",

    image: "/projects/arsip/arsip-project.webp",

    period: {
      start: "2026",
    },

    link: "https://github.com/FarizAl278/arsip-web",

    links: {
      repo: "https://github.com/FarizAl278/arsip-web",
    },

    skills: ["Laravel", "Filament", "PHP", "MySQL", "VPS"],

    coverSkills: ["Laravel", "Filament", "VPS"],

    features: [
      "Manage and organize employee archive documents through a centralized web application.",
      "Upload and access archive files through a dedicated VPS-based storage system.",
      "Provide structured archive management to make employee documents easier to manage and retrieve.",
    ],

    featuresId: [
      "Mengelola dan mengorganisir dokumen arsip pegawai melalui aplikasi web terpusat.",
      "Mengunggah dan mengakses file arsip melalui sistem penyimpanan berbasis VPS.",
      "Menyediakan pengelolaan arsip yang terstruktur agar dokumen pegawai lebih mudah dikelola dan ditemukan.",
    ],

    impact: [
      "Centralizes digital employee archives into a structured web-based management system.",
      "Separates application functionality from file storage by using a dedicated VPS for archive files.",
    ],

    impactId: [
      "Memusatkan arsip digital pegawai ke dalam sistem manajemen berbasis web yang terstruktur.",
      "Memisahkan fungsi aplikasi dengan penyimpanan file menggunakan VPS khusus untuk menyimpan dokumen arsip.",
    ],

    collaboration: COLLABORATION["archive-project"],

    gallery: [
      "/projects/arsip/arsip-project.webp",
      "/projects/arsip/arsip-project-2.webp",
    ],
  },
  {
    id: "saynana-project",

    title: "Saynana — E-Commerce Platform",

    category: "Full Stack",
    categoryId: "Full Stack",

    tagline:
      "A full-stack e-commerce platform built to support both buyer and seller workflows, with AI-powered features integrated into the shopping experience.",

    taglineId:
      "Platform e-commerce full-stack yang mendukung alur pembeli dan penjual, dengan fitur berbasis AI yang terintegrasi ke dalam pengalaman berbelanja.",

    seoDescription:
      "Saynana is a full-stack e-commerce platform built with Laravel, Livewire, and Flowise, featuring separate buyer and seller workflows with AI-powered functionality.",

    year: "2025",

    image: "/projects/saynana/saynana.webp",

    period: {
      start: "2025",
    },

    link: "https://github.com/alelawar/saynana",

    links: {
      repo: "https://github.com/alelawar/saynana",
    },

    skills: ["Laravel", "Livewire", "PHP", "MySQL", "Flowise", "Tailwind CSS"],

    coverSkills: ["Laravel", "Livewire", "Flowise"],

    features: [
      "Provides separate workflows for buyers and sellers within the e-commerce platform.",
      "Manages e-commerce functionality through a Laravel-based full-stack application.",
      "Integrates Flowise to provide AI-powered functionality within the application.",
    ],

    featuresId: [
      "Menyediakan alur kerja terpisah untuk pembeli dan penjual dalam platform e-commerce.",
      "Mengelola berbagai fungsi e-commerce melalui aplikasi full-stack berbasis Laravel.",
      "Mengintegrasikan Flowise untuk menyediakan fitur berbasis AI di dalam aplikasi.",
    ],

    impact: [
      "Combines e-commerce functionality with AI capabilities in a single web application.",
      "Provides different experiences and workflows for buyers and sellers within the same platform.",
    ],

    impactId: [
      "Menggabungkan fungsionalitas e-commerce dengan kemampuan AI dalam satu aplikasi web.",
      "Menyediakan pengalaman dan alur kerja yang berbeda untuk pembeli dan penjual dalam satu platform.",
    ],

    collaboration: COLLABORATION["saynana-project"],

    gallery: [
      "/projects/saynana/saynana.webp",
      "/projects/saynana/saynana-admin.webp",
      "/projects/saynana/saynana-chat.webp",
      "/projects/saynana/saynana-login.webp",
      "/projects/saynana/saynana02.webp",
    ],
  },
  {
    id: "capstone-project",

    title: "IBM Capstone Project – AI Recommendation System",

    category: "AI & LLM",
    categoryId: "AI & LLM",

    tagline:
      "An AI assistant that recommends California restaurants by name, cuisine, or vibe, powered by LLM data extraction, multimodal retrieval, and an MCP tool server.",

    taglineId:
      "Asisten AI yang merekomendasikan restoran California berdasarkan nama, jenis masakan, atau suasana, ditenagai ekstraksi data LLM, multimodal retrieval, dan MCP tool server.",

    seoDescription:
      "Connoisseur Companion is an AI restaurant recommendation assistant built with Python, Gemini, ChromaDB, and the Model Context Protocol (MCP), featuring LLM-based data extraction and multimodal retrieval.",

    year: "2026",

    image: "/projects/capstone/capstone-project.webp",

    period: {
      start: "2026",
    },

    link: "#",

    links: {
      repo: "https://github.com/alelawar/Course-IBM-RAG-and-Agentic-AI/tree/main/capstone-project",
    },

    skills: [
      "Python",
      "Gemini",
      "LangChain",
      "ChromaDB",
      "FastMCP",
      "Gradio",
      "Pydantic",
    ],

    coverSkills: ["Gemini", "ChromaDB", "MCP"],

    features: [
      "Extracts structured restaurant records (location, cuisine, rating, price range, vibe) from raw text descriptions using an LLM with schema validation.",
      "Searches restaurants and recipes through multimodal similarity retrieval that fuses text and image scores.",
      "Exposes restaurant info, vibe-based recommendations, and reviews as MCP tools that the chat agent calls on its own.",
    ],

    featuresId: [
      "Mengekstrak data restoran terstruktur (lokasi, masakan, rating, kisaran harga, suasana) dari deskripsi teks mentah menggunakan LLM dengan validasi skema.",
      "Mencari restoran dan resep lewat multimodal similarity retrieval yang menggabungkan skor teks dan gambar.",
      "Menyediakan info restoran, rekomendasi berdasarkan suasana, dan ulasan sebagai MCP tool yang dipanggil sendiri oleh agen chat.",
    ],

    impact: [
      "Turns unstructured restaurant descriptions into a searchable, validated dataset of 80 records.",
      "Backed by 38 offline unit tests, so data and logic can be verified without any API calls.",
    ],

    impactId: [
      "Mengubah deskripsi restoran tidak terstruktur menjadi dataset tervalidasi yang dapat dicari dengan 80 record.",
      "Didukung 38 unit test offline sehingga data dan logika dapat diverifikasi tanpa pemanggilan API.",
    ],

    collaboration: COLLABORATION["capstone-project"],

    gallery: [
      "/projects/capstone/capstone-project.webp",
      "/projects/capstone/capstone-project-2.webp",
    ],
  },
  {
    id: "wsl-server-manager",
    title: "WSL Server Manager",
    category: "Desktop Application",
    categoryId: "Aplikasi Desktop",
    tagline:
      "A desktop application for managing local development servers running in WSL, with server controls, live logs, and access information in one interface.",
    taglineId:
      "Aplikasi desktop untuk mengelola server development lokal yang berjalan di WSL, dilengkapi kontrol server, log langsung, dan informasi akses dalam satu antarmuka.",
    seoDescription:
      "WSL Server Manager is an Electron desktop application built with React and Vite to simplify local server management in Windows Subsystem for Linux.",
    year: "2026",
    image: "/projects/wsl-server-manager/wsl-server-manager.webp",
    period: { start: "2026" },
    link: "https://github.com/alelawar/electron-server-manager",
    links: { repo: "https://github.com/alelawar/electron-server-manager" },
    skills: [
      "Electron",
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "WSL",
      "Bash",
    ],
    coverSkills: ["Electron", "React", "WSL"],
    features: [
      "Manage local development servers through a desktop interface.",
      "Monitor server status and inspect runtime logs.",
      "Display local and public access URLs for running applications.",
      "Automate Laravel server startup workflows, including Octane and Queue Worker processes.",
      "Assist with Windows-to-WSL port forwarding configuration.",
    ],
    featuresId: [
      "Mengelola server development lokal melalui antarmuka desktop.",
      "Memantau status server dan melihat log proses secara langsung.",
      "Menampilkan URL akses lokal dan publik untuk aplikasi yang berjalan.",
      "Mengotomatiskan proses startup server Laravel, termasuk Octane dan Queue Worker.",
      "Membantu konfigurasi port forwarding dari Windows ke WSL.",
    ],
    impact: [
      "Simplifies local server operations by bringing common controls and runtime logs into one desktop application.",
      "Reduces repetitive terminal work when starting and monitoring development services.",
    ],
    impactId: [
      "Menyederhanakan operasional server lokal dengan menggabungkan kontrol umum dan log proses dalam satu aplikasi desktop.",
      "Mengurangi pekerjaan terminal yang berulang saat menjalankan dan memantau layanan development.",
    ],
    collaboration: COLLABORATION["wsl-server-manager"],
    gallery: [
      "/projects/wsl-server-manager/wsl-server-manager.webp",
      "/projects/wsl-server-manager/wsl-server-manager-2.webp",
    ],
  },
]

export const PROJECTS_BY_ID: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((project) => [project.id, project])
)
