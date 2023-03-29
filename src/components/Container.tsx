import BottomNavigation from "./BottomNavigation";
import navigationConfig from "@/config/navigationConfig";
import Header from "./Header";
import PageTransition from "./PageTransition";
import CustomSeo from "./CustomSEO";
import Footer from "./Footer";
import Image from "next/image";
import { useRouter } from "next/router";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Container = ({ children, pageTitle }: ContainerProps) => {
  const router = useRouter();
  const checkRoute = (href: string) => {
    return router.pathname === href;
  };

  return (
    <>
      <div className="h-full min-h-screen w-full border-gray-100 pb-[76px] sm:container sm:mx-auto sm:px-4 md:pb-0">
        <CustomSeo title={pageTitle} />
        <Header
          logo={
            <div
              className="flex cursor-pointer items-center gap-2"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => router.push("/")}
            >
              <Image width={24} height={24} src="/iojek-logo.svg" alt="HMIF" />

              <span className="text-xl font-semibold tracking-wide">iojek</span>
            </div>
          }
          links={navigationConfig}
        />
        <div className="mx-auto max-w-[968px]">
          <PageTransition>{children}</PageTransition>
        </div>
        <div className="flex md:hidden">
          <BottomNavigation links={navigationConfig} />
        </div>
        <div className="mb-10 hidden md:flex">
          <Footer />
        </div>

        <a href="https://wa.me/6281328257894" target="_blank">
          <button
            className={twMerge(
              "filled-button fixed bottom-24 right-4 hidden gap-2 !rounded-full !bg-green-500 hover:!bg-green-600 focus:ring-green-400 md:bottom-6 md:right-6 md:flex",
              checkRoute("/") ? "!hidden" : "!flex"
            )}
          >
            Konsultasi Gratis
            <IconBrandWhatsapp />
          </button>
        </a>
      </div>
    </>
  );
};

export default Container;
