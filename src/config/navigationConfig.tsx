import { IconArtboard, IconHome2, IconUsers } from "@tabler/icons-react";

const navigationConfig = [
  {
    label: "Beranda",
    href: "/",
    icon: <IconHome2 />,
  },
  {
    label: "Portofolio",
    href: "/portofolio",
    icon: <IconArtboard />,
  },
  {
    label: "Tentang Kami",
    href: "/about",
    icon: <IconUsers />,
  },
];

export type NavigationConfigType = typeof navigationConfig;

export default navigationConfig;
