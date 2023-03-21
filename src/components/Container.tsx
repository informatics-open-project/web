import BottomNavigation from "./BottomNavigation";
import navigationConfig from "@/config/navigationConfig";
import Header from "./Header";
import PageTransition from "./PageTransition";
import CustomSeo from "./CustomSEO";
import Footer from "./Footer";

type ContainerProps = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Container = ({ children, pageTitle }: ContainerProps) => {
  return (
    <div className="h-full min-h-screen w-full border-gray-100 sm:container sm:mx-auto sm:px-4">
      <CustomSeo title={pageTitle} />
      <Header logo="IOJEK" links={navigationConfig} />
      <div className="mx-auto max-w-[968px]">
        <PageTransition>{children}</PageTransition>
      </div>
      <div className="flex md:hidden">
        <BottomNavigation links={navigationConfig} />
      </div>
      <div className="hidden md:flex">
        <Footer />
      </div>
    </div>
  );
};

export default Container;
