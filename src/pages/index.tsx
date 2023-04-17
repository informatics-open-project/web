import Container from "@/components/Container";
import portofolioConfig from "@/config/portofolioConfig";
import testimonyConfig from "@/config/testimonyConfig";
import Image from "next/image";
import { useRouter } from "next/router";
import PortofolioCard from "@/components/PortofolioCard";
import FAQ from "@/components/FAQ";
import faqConfig from "@/config/faqConfig";
import { IconBrandWhatsapp } from "@tabler/icons-react";

const Home = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="flex min-h-[calc(100vh-208px)] flex-col items-center justify-center gap-4 p-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold tracking-wide text-blue-500 ">
            We Are Open!
          </div>

          <h1 className="font-display max-w-[704px] bg-gradient-to-br from-black to-stone-500 bg-clip-text p-4 pb-0 text-center text-5xl font-bold tracking-[-0.02em] text-slate-900 text-transparent drop-shadow-sm md:p-6 md:text-7xl  md:leading-[5rem] lg:text-8xl">
            <span
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
              }}
            >
              Revolutionize Your Ideas with Us
            </span>
          </h1>

          <span className="sm:text-md mx-auto w-5/6 max-w-3xl p-2 text-center text-sm text-slate-400 md:text-lg">
            Informatics Open Project menyediakan berbagai layanan solusi web,
            aplikasi mobile, dan game terbaik untuk Anda.
          </span>

          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row md:mt-8">
            <button
              className="filled-button"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => router.push("/request-quotation")}
            >
              Minta Penawaran
            </button>

            <a
              href="https://drive.google.com/drive/folders/1MF0LaWcPHcdgFStnKkX5RVrvBXqivFEl"
              target="_blank"
              className="text-sm text-blue-500 hover:text-blue-800"
            >
              <button
                className="filled-button"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={() => router.push("/request-quotation")}
              >
                Syarat dan Ketentuan
              </button>
            </a>
          </div>

          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            <a href="https://wa.me/6281328257894" target="_blank">
              <button className="outline-button flex gap-2">
                Konsultasi Gratis
                <IconBrandWhatsapp />
              </button>
            </a>
          </div>
        </div>

        <div className="mb-0 mt-28 flex w-full flex-col md:mb-28">
          <div className="mt-0 mb-8 flex justify-center md:mb-16">
            <span className="text-2xl font-bold md:text-4xl">Proyek Kami</span>
          </div>
          <div className="mb-0 flex flex-col items-center gap-6 md:mb-28">
            <div className="columns-1 items-start gap-6 md:columns-2">
              {portofolioConfig.slice(0, 2).map((item) => (
                <PortofolioCard key={item.id} data={item} />
              ))}
            </div>
            <button
              className="outline-button"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onClick={() => router.push("/portofolio")}
            >
              Lihat Lainnya
            </button>
          </div>

          <div className="mb-0 mt-28 flex w-full flex-col md:mb-28">
            <div className="mt-0 mb-8 flex justify-center md:mb-16">
              <span className="text-2xl font-bold md:text-4xl">
                Kata Mereka
              </span>
            </div>
            <div className="columns-1 gap-6 md:columns-2">
              {testimonyConfig.map((item) => (
                <div key={item.name} className="testimony-card">
                  <div className="flex gap-4 md:gap-6">
                    <Image
                      className="h-12 w-12 rounded-full object-cover md:h-16 md:w-16"
                      width={400}
                      height={400}
                      alt={item.name}
                      src={item.image}
                    />
                    <div className="flex flex-col justify-center gap-1">
                      <h3 className="text-md font-bold text-slate-900 md:text-lg">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-400 md:text-sm">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-justify text-xs tracking-wide">
                      {item.testimony}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-0 mt-28 flex w-full flex-col md:mb-28">
            <div className="mt-0 mb-8 flex justify-center md:mb-16">
              <span className="text-center text-2xl font-bold md:text-4xl">
                Pertanyaan yang Sering Ditanyakan
              </span>
            </div>

            <FAQ data={faqConfig} />
          </div>
        </div>
      </div>
    </Container>
  );
};

Home.title = "Home";

export default Home;
