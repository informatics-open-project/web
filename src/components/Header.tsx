import type { NavigationConfigType } from "@/config/navigationConfig";
import { useRouter } from "next/router";

type HeaderProps = {
  logo: string | React.ReactNode;
  links: NavigationConfigType;
};

const Header = ({ logo, links }: HeaderProps) => {
  const router = useRouter();
  const isActive = (link: string) =>
    router.pathname === link ? "text-blue-500" : "text-gray-500";

  return (
    <div className="mx-auto flex w-full max-w-[968px] justify-center px-2 py-4 sm:justify-between">
      <div className="flex items-center font-bold">{logo}</div>

      <div className="hidden gap-4 md:flex">
        {links.map((link) => {
          return (
            <div
              key={link.href}
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => router.push(link.href)}
              className={`${isActive(
                link.href
              )} bold flex flex-grow cursor-pointer flex-col items-center gap-1 rounded-full p-2 px-4 py-2 transition-all duration-150 hover:border-sky-700 hover:bg-sky-100 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-blue-50 focus-visible:border-sky-700 sm:w-auto`}
            >
              <span className="text-xs md:text-sm">{link.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
