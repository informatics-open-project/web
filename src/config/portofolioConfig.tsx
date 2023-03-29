import {
  IconBrandAirtable,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";

const portofolioConfig = [
  {
    id: 1,
    title: "I-Gate 2022 Ticket Website",
    href: "https://igate.hmif-undip.com",
    description:
      "I-GATE merupakan kegiatan penyambutan mahasiswa tingkatan 2022 serta perkenalan dan pentas seni setiap tingkatan yang diadakan oleh Himpunan Mahasiswa Informatika.",
    image: "/portofolio/i-gate.png",
    stack: [
      {
        title: "Next.js",
        icon: <IconBrandNextjs />,
      },
      {
        title: "Mantine",
        icon: <IconBrandMantine />,
      },
      {
        title: "Airtable",
        icon: <IconBrandAirtable />,
      },
      {
        title: "Typescript",
        icon: <IconBrandTypescript />,
      },
    ],
  },

  {
    id: 2,
    title: "Anforcom 2022 Landing Page",
    href: "https://anforcom.com",
    description:
      "Lomba teknologi tahunan yang diadakan oleh Himpunan Mahasiswa Informatika Universitas Diponegoro.",
    image: "/portofolio/anforcom-web.png",
    stack: [
      {
        title: "Next.js",
        icon: <IconBrandNextjs />,
      },
      {
        title: "Tailwind CSS",
        icon: <IconBrandTailwind />,
      },
      {
        title: "Typescript",
        icon: <IconBrandTypescript />,
      },
    ],
  },

  {
    id: 3,
    title: "Anforcom 2022 Dashboard Page",
    href: null,
    description:
      "Lomba teknologi tahunan yang diadakan oleh Himpunan Mahasiswa Informatika Universitas Diponegoro.",
    image: "/portofolio/anforcom-app.png",
    stack: [
      {
        title: "Node.js",
        icon: <IconBrandJavascript />,
      },
      {
        title: "Next.js",
        icon: <IconBrandNextjs />,
      },
      {
        title: "Mantine",
        icon: <IconBrandMantine />,
      },
      {
        title: "Typescript",
        icon: <IconBrandTypescript />,
      },
    ],
  },

  {
    id: 4,
    title: "Informatics Ongoing Story 2022 Website",
    href: "https://ios.hmif-undip.com",
    description:
      "Informatics Ongoing Story adalah buletin daring yang menyediakan informasi seputar Departemen Informatika Universitas Diponegoro.",
    image: "/portofolio/ios.png",
    stack: [
      {
        title: "Next.js",
        icon: <IconBrandNextjs />,
      },
      {
        title: "Mantine",
        icon: <IconBrandMantine />,
      },
      {
        title: "Typescript",
        icon: <IconBrandTypescript />,
      },
    ],
  },
];

export type PortofolioConfigType = typeof portofolioConfig;

export default portofolioConfig;
