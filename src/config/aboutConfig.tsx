import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";

const aboutConfig = [
  {
    id: 1,
    name: "Muhammad Bhaska",
    role: "Frontend Developer",
    social: [
      {
        title: "Github",
        href: "https://github.com/mhmdbhsk",
        icon: <IconBrandGithub />,
      },
      {
        title: "Twitter",
        href: "https://twitter.com/mhmdbhsk",
        icon: <IconBrandTwitter />,
      },
      {
        title: "Instagram",
        href: "https://instagram.com/mhmdbhsk",
        icon: <IconBrandInstagram />,
      },
    ],
    image: "https://github.com/mhmdbhsk.png",
  },
  {
    id: 2,
    name: "Kristian David",
    role: "UI/UX",
    social: [
      {
        title: "Github",
        href: "https://github.com/kristiandavidd",
        icon: <IconBrandGithub />,
      },
    ],
    image: "https://github.com/kristiandavidd.png",
  },
  {
    id: 3,
    name: "Resma Adi Nugroho",
    role: "Mobile Developer",
    social: [
      {
        title: "Github",
        href: "https://github.com/dinug-c",
        icon: <IconBrandGithub />,
      },
      {
        title: "Twitter",
        href: "https://twitter.com/coderadin",
        icon: <IconBrandTwitter />,
      },
      {
        title: "Instagram",
        href: "https://instagram.com/equiseran",
        icon: <IconBrandInstagram />,
      },
    ],
    image: "https://github.com/dinug-c.png",
  },
];

export type AboutConfigType = typeof aboutConfig;

export default aboutConfig;
