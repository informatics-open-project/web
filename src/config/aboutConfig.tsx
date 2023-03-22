import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";

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
];

export type PortofolioConfigType = typeof aboutConfig;

export default aboutConfig;
