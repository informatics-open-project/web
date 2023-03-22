import {
  IconBrandAirtable,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";

const aboutConfig = [
  {
    id: 1,
    title: "Informatics Gathering (I-Gate) 2022 Ticket Website",
    href: "https://igate.hmif-undip.com",
    description:
      "Informatics Gathering (I-GATE) merupakan kegiatan penyambutan mahasiswa tingkatan 2022 serta perkenalan dan pentas seni setiap tingkatan. Program ini bertujuan untuk meningkatkan rasa kekeluargaan dan mempererat kebersamaan antar keluarga Informatika Undip dan meningkatkan tali silaturahmi keluarga besar Informatika Undip. Selain itu, kegiatan I-GATE juga dapat mendukung terciptanya suasana yang kondusif dalam keluarga Informatika Undip.",
    image: "/i-gate.png",
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
      "Annual Informatic Competition (Anforcom) adalah sebuah kompetisi mobile apps berskala nasional yang diselenggarakan oleh Himpunan Mahasiswa Informatika Universitas Diponegoro. Kami membuat website landing page untuk Anforcom 2022",
    image: "/i-gate.png",
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
      "Annual Informatic Competition (Anforcom) adalah sebuah kompetisi mobile apps berskala nasional yang diselenggarakan oleh Himpunan Mahasiswa Informatika Universitas Diponegoro. Kami membuat dashboard page untuk Anforcom 2022",
    image: "/i-gate.png",
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
    title: "Informatics Ongoing Story (IoS) 2022 Website",
    href: "https://ios.hmif-undip.com",
    description:
      "Informatics Ongoing Story adalah buletin daring yang menyediakan informasi seputar teknologi, informatika, dan Departemen Informatika Universitas Diponegoro kepada mahasiswa Informatika dan masyarakat umum.",
    image: "/i-gate.png",
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

export type PortofolioConfigType = typeof aboutConfig;

export default aboutConfig;
