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
    role: "Frontend Developer",
    social: [
      {
        title: "Github",
        href: "https://github.com/kristiandavidd",
        icon: <IconBrandGithub />,
      },
      {
        title: "Instagram",
        href: "https://instagram.com/kristiandavidd",
        icon: <IconBrandInstagram />,
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
        href: "https://github.com/masturing",
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
    image: "https://github.com/masturing.png",
  },
  {
    id: 4,
    name: "Dian Pagita",
    role: "Backend Developer",
    social: [
      {
        title: "Github",
        href: "https://github.com/kurzzt",
        icon: <IconBrandGithub />,
      },
      
    ],
    image: "https://github.com/kurzzt.png",
  },
  {
    id: 5,
    name: "Mahardika Putra",
    role: "Mobile Developer",
    social: [
      {
        title: "Github",
        href: "https://github.com/PlattenEcho",
        icon: <IconBrandGithub />,
      },

    ],
    image: "https://github.com/plattenecho.png",
  },
  {
    id: 6,
    name: "Daffa aly",
    role: "Frontend Developer",
    social: [
      {
        title: "Github",
        href: "https://github.com/falydra",
        icon: <IconBrandGithub />,
      },

    ],
    image: "https://github.com/falydra.png",
  },
];

export type AboutConfigType = typeof aboutConfig;

export default aboutConfig;
