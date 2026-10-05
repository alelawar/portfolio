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

      links: {
        
      },

      skills: [
        "Laravel",
        "Filament",
        "PHP",
        "MySQL",
        "Tailwind CSS",
        "REST API",
      ],

      coverSkills: [
        "Laravel",
        "Filament",
        "MySQL",
      ],

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

    skills: [
      "Laravel",
      "Filament",
      "PHP",
      "MySQL",
      "VPS",
    ],

    coverSkills: [
      "Laravel",
      "Filament",
      "VPS",
    ],

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

    skills: [
      "Laravel",
      "Livewire",
      "PHP",
      "MySQL",
      "Flowise",
      "Tailwind CSS",
    ],

    coverSkills: [
      "Laravel",
      "Livewire",
      "Flowise",
    ],

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
]

export const PROJECTS_BY_ID: Record<string, Project> = Object.fromEntries(
  PROJECTS.map((project) => [project.id, project])
)
