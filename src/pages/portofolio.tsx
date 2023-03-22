import Container from "@/components/Container";
import portofolioConfig from "@/config/portofolioConfig";
import Image from "next/image";

const Portofolio = () => {
  return (
    <Container>
      <div className="p-6">
        <div className="mt-0 mb-8 flex justify-center md:mt-16 md:mb-28">
          <span className="text-4xl font-bold md:text-6xl">Portofolio</span>
        </div>

        <div>
          <p></p>
        </div>

        <div className="columns-1 gap-6 md:columns-2">
          {portofolioConfig.map((item) => (
            <div className="portofolio-card" key={item.id}>
              <div className="overflow-hidden rounded-2xl bg-white">
                <Image
                  className="h-56 w-full object-cover object-center"
                  src={item.image}
                  width={720}
                  height={400}
                  alt="content"
                />

                <div className="flex flex-col gap-4 p-6">
                  <h1 className="title-font text-lg font-bold text-gray-900">
                    {item.title}
                  </h1>
                  <p className="text-justify text-xs leading-relaxed text-slate-400 md:text-sm">
                    {item.description}
                  </p>
                  {item.href && (
                    <a
                      href={item.href}
                      className="cursor-pointer text-xs leading-relaxed text-slate-600 hover:underline md:text-sm"
                      target="_blank"
                    >
                      Lihat Website
                    </a>
                  )}

                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    {item.stack.map((stack) => (
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium leading-4 text-gray-800"
                        key={stack.title}
                        data-tooltip-target="tooltip-stack"
                      >
                        {stack.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

Portofolio.pageTitle = "Portofolio";

export default Portofolio;
