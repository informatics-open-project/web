import type { NavigationConfigType } from "@/config/navigationConfig";
import { useRouter } from "next/router";
import { twJoin } from "tailwind-merge";

type HeaderProps = {
  logo: string | React.ReactNode;
  links: NavigationConfigType;
};

const Header = ({ logo, links }: HeaderProps) => {
  const router = useRouter();
  const isActive = (link: string) =>
    router.pathname === link ? "text-blue-500" : "text-gray-500";
  const checkRoute = (href: string) => {
    return router.pathname === href;
  };

  return (
    <header className="sticky mx-auto flex w-full max-w-[968px] items-center justify-center px-4 py-4 md:justify-between">
      <div className="flex items-center font-bold">{logo}</div>

      <div className="hidden items-center gap-4 md:flex">
        {links.map((link) => {
          return (
            <div
              key={link.href}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => router.push(link.href)}
              className={`${isActive(
                link.href
              )} bold flex h-min flex-grow cursor-pointer flex-col items-center gap-1 rounded-full p-2 px-4 py-2 transition-all duration-150 hover:border-sky-700 hover:bg-sky-100 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 focus-visible:border-sky-700 sm:w-auto`}
            >
              <span className="text-xs md:text-sm">{link.label}</span>
            </div>
          );
        })}
      </div>

      <div
        className={`hidden items-center md:flex ${
          checkRoute("/") ? "!hidden" : "!hidden md:!flex"
        }`}
      >
        <button
          className={twJoin("outline-button", `!px-3 !py-2 !text-xs`)}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={() => router.push("/request-quotation")}
        >
          Minta Penawaran
        </button>
      </div>
    </header>
  );
};

export default Header;
