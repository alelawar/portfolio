import { Icons } from "@/components/icons"

import type { SocialLink } from "../types/social-links"

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <Icons.github />,
    title: "GitHub",
    href: "https://github.com/alelawar",
  },
  {
    icon: <Icons.linkedin />,
    title: "LinkedIn",
    href: "https://linkedin.com/in/ahmad-lesmana-89311b332/",
  },
  // {
  //   icon: <Icons.discord />,
  //   title: "Discord",
  //   href: "https://discord.com/users/namakamu",
  // },
  // {
  //   icon: <Icons.medium />,
  //   title: "Medium",
  //   href: "https://medium.com/@namakamu",
  // },
  {
    icon: <Icons.email />,
    title: "Email",
    href: "mailto:ahmadlesmana788@gmail.com",
  },
]
