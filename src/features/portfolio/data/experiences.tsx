import {
  AstroidIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  SchoolIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "ipb-University",
    companyName: "Direktorat SDM – IPB",
    companyLogo: "/logos/ipb.png",
    companyWebsite: "https://ipb.ac.id",
    positions: [
      {
        id: "ipb-university-sdm",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "08.2025",
          end: "01.2026"
        },
        employmentType: "Internship",
        icon: <AstroidIcon />,
        description: `- Developed an internal Salary Slip & Salary Recap application to streamline salary data management and document generation.
        - Developed a Digital Archive Management application for organizing and managing employee documents.
        - Managed and maintained internal web applications running on a Linux-based environment.
        - Worked across backend, database, and application infrastructure to support reliable internal systems.`,
        descriptionId: `- Mengembangkan aplikasi Slip Gaji & Rekap Gaji internal untuk mempermudah pengelolaan data gaji dan pembuatan dokumen. 
        - Mengembangkan aplikasi Manajemen Arsip Digital untuk mengelola dan mengorganisir dokumen pegawai. 
        - Mengelola dan memelihara aplikasi web internal yang berjalan pada lingkungan berbasis Linux. 
        - Menangani pengembangan backend, database, dan infrastruktur aplikasi untuk mendukung sistem internal yang andal.`,
        skills: ["Laravel", "Electron", "TypeScript", "Node.js", "Linux", "Go" ,"Testing", ],
      },
    ],
    isCurrentEmployer: false,
  },
  // {
  //   id: "ibm-courses",
  //   companyName: "IBM Courses",
  //   companyLogo: "/logos/ibm.png",
  //   companyWebsite: "https://ibm.com",
  //   positions: [
  //     {
  //       id: "ibm-courses",
  //       title: "IBM RAG and Agentic AI Professional ",
  //       employmentPeriod: {
  //         start: "09.2026",
  //         end: "09.2026"
  //       },
  //       employmentType: "Internship",
  //       icon: <AstroidIcon />,
  //       description: `- Built and maintained features for an internal web application used by multiple teams.
  //       - Collaborated with designers and product managers to translate requirements into working software.
  //       - Wrote unit tests and participated in code reviews to keep the codebase reliable.
  //       - Improved page load performance by optimizing data fetching and caching strategies.`,
  //       descriptionId: `- Membangun dan memelihara fitur untuk aplikasi web internal yang digunakan oleh beberapa tim.
  //       - Berkolaborasi dengan desainer dan product manager untuk menerjemahkan kebutuhan menjadi perangkat lunak yang berjalan.
  //       - Menulis unit test dan berpartisipasi dalam code review untuk menjaga kualitas codebase.
  //       - Meningkatkan performa loading halaman dengan mengoptimalkan strategi data fetching dan caching.`,
  //       skills: ["Laravel", "Electron", "TypeScript", "Node.js", "Linux", "Go" ,"Testing", ],
  //     },
  //   ],
  //   isCurrentEmployer: false,
  // },
]
