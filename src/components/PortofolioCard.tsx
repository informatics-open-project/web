import Image from "next/image";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

type PortofolioCardProps = {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    href?: string | null;
    stack: {
      title: string;
      icon: JSX.Element | ReactNode;
    }[];
  };
  showStack?: boolean;
  showLink?: boolean;
};

const PortofolioCard = ({
  data,
  showStack = false,
  showLink = false,
}: PortofolioCardProps) => {
  const containerMotion = {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
    },
  };

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      animate="rest"
      variants={containerMotion}
      style={{ height: "100%" }}
      key={data.id}
    >
      <div className="portofolio-card">
        <div className="overflow-hidden bg-white">
          <Image
            className="h-56 w-full object-cover object-center"
            src={data.image}
            width={720}
            height={400}
            alt="content"
          />

          <div className="flex flex-col gap-2 p-6">
            <h1 className="title-font text-lg font-bold text-gray-900">
              {data.title}
            </h1>
            <p className="text-justify text-xs leading-relaxed text-slate-400 md:text-sm">
              {data.description}
            </p>

            {showLink && data.href && (
              <a
                href={data.href}
                className="cursor-pointer text-xs leading-relaxed text-slate-600 hover:underline md:text-sm"
                target="_blank"
              >
                Lihat Website
              </a>
            )}

            {showStack && data.stack && (
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {data.stack.map((stack) => (
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium leading-4 text-gray-800"
                    key={stack.title}
                    data-tooltip-target="tooltip-stack"
                  >
                    {stack.icon}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortofolioCard;
