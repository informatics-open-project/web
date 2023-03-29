import { useRouter } from "next/router";
import { twJoin, twMerge } from "tailwind-merge";

type BottomNavigationItemProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type BottomNavigationProps = {
  links: BottomNavigationItemProps[];
};

const BottomNavigation = ({ links }: BottomNavigationProps) => {
  const router = useRouter();
  const checkRoute = (href: string) => {
    return router.pathname === href;
  };

  return (
    <div>
      <button
        className={`${
          checkRoute("/") ? "!hidden" : "!flex"
        } filled-button fixed bottom-40 right-4 !rounded-full`}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={() => router.push("/request-quotation")}
      >
        Minta Penawaran
      </button>

      <div className="fixed bottom-0 left-0 right-0 flex max-h-20 w-full justify-around border-t bg-white p-2">
        {links.map((link) => {
          return (
            <BottomNavigationItem
              key={link.href}
              label={link.label}
              href={link.href}
              icon={link.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

const BottomNavigationItem = ({
  label,
  href,
  icon,
}: BottomNavigationItemProps) => {
  const router = useRouter();
  const isActive =
    router.pathname === href ? "bg-blue-500 text-white" : "text-gray-500";

  return (
    <div
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={() => router.push(href)}
      className={`${isActive} flex flex-grow cursor-pointer flex-col items-center gap-1 rounded-xl p-2 px-4 py-2 transition-all duration-150`}
    >
      <div>{icon}</div>
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default BottomNavigation;
