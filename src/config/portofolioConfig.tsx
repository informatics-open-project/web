import {
  IconBrandAirtable,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandFlutter
} from "@tabler/icons-react";

const portofolioConfig = [
  {
    id: 1,
    title: "Pemira HMTP 20204 Website",
    href: "https://hmtp2024.pemira.app",
    description:
      "Pemira HMTP merupakan sebuah platform untuk pemilihan ketua himpunan Himpunan Mahasiswa Teknik Planologi",
    image: "/portofolio/hmtp-pemira.png",
    stack: [
      {
        title: "Next.js",
        icon: <IconBrandNextjs />,
      },
      {
        title: "Tailwind",
        icon: <IconBrandTailwind />,
      },
      {
        title: "NestJs",
        icon: <IconBrandNodejs />,
      },
      {
        title: "Typescript",
        icon: <IconBrandTypescript />,
      },
    ],
  },
  {
    id: 2,
    title: "Diponegoro Chemistry Fair Website and Dashboard",
    href: "https://dcfundip.web.id/",
    description:
      "Diponegoro Chemistry Fair 2023 merupakan suatu kegiatan Himpunan Mahasiswa Kimia Universitas Diponegoro yang bertujuan sebagai aktualisasi mahasiswa dalam mendorong pengembangan Sumber Daya Manusia agar dapat meningkatkan kemampuan berpikir kreatif dan menemukan ide-ide yang dapat mengatasi berbagai masalah yang ada.",
    image: "/portofolio/dcf.png",
    stack: [
      {
        title: "Next.js",
        icon: <IconBrandNextjs />,
      },
      {
        title: "Tailwind",
        icon: <IconBrandTailwind />,
      },
    ],
  },
  {
    id: 3,
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
    id: 4,
    title: "Mentalove Mobile Platform",
    href: "https://play.google.com/store/apps/details?id=com.dinugc.mentalove_app&hl=id",
    description:
      "Mentalove adalah aplikasi konseling yang dapat membantu pengguna dalam kesehatan mental",
    image: "/portofolio/mentalove.png",
    stack: [
      {
        title: "Flutter",
        icon: <IconBrandFlutter />,
      },
    ],
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
