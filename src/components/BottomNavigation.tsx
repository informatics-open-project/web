import { useRouter } from "next/router";

type BottomNavigationItemProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

type BottomNavigationProps = {
  links: BottomNavigationItemProps[];
};

const BottomNavigation = ({ links }: BottomNavigationProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex max-h-20 w-full justify-around p-2">
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
      className={`${isActive} flex flex-grow cursor-pointer flex-col items-center gap-1 rounded-full p-2 px-4 py-2 transition-all duration-150`}
    >
      <div>{icon}</div>
      <span className="text-xs">{label}</span>
    </div>
  );
};

export default BottomNavigation;