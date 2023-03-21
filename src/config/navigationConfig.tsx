import { IconArtboard, IconHome2, IconUsers } from "@tabler/icons-react";

const navigationConfig = [
  {
    label: "Home",
    href: "/",
    icon: <IconHome2 />,
  },
  {
    label: "Portofolio",
    href: "/portofolio",
    icon: <IconArtboard />,
  },
  {
    label: "About Us",
    href: "/about",
    icon: <IconUsers />,
  },
];

export type NavigationConfigType = typeof navigationConfig;

export default navigationConfig;
