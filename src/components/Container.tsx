import BottomNavigation from "./BottomNavigation";
import navigationConfig from "@/config/navigationConfig";
import Header from "./Header";
import PageTransition from "./PageTransition";
import CustomSeo from "./CustomSEO";
import Footer from "./Footer";
import Image from "next/image";

type ContainerProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Container = ({ children, pageTitle }: ContainerProps) => {
  return (
    <>
      <div className="h-full min-h-screen w-full border-gray-100 pb-[76px] sm:container sm:mx-auto sm:px-4 md:pb-0">
        <CustomSeo title={pageTitle} />
        <Header
          logo={
            <div className="flex gap-2">
              <span>IOJEK</span>

              <Image width={24} height={24} src="/hmif-logo.svg" alt="HMIF" />
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
      </div>
    </>
  );
};

export default Container;
