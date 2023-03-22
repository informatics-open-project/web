import Container from "@/components/Container";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
    <Container>
      <div className="flex min-h-[calc(100vh-208px)] flex-col items-center justify-center gap-4 p-4">
        <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold tracking-wide text-blue-500 ">
          Coming Soon
        </div>

        <h1 className="font-display max-w-[704px] bg-gradient-to-br from-black to-stone-500 bg-clip-text p-4 pb-0 text-center text-5xl font-bold tracking-[-0.02em] text-slate-900 text-transparent drop-shadow-sm md:p-6 md:text-7xl  md:leading-[5rem] lg:text-8xl">
          <span className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 433px;">
            Revolutionize Your Ideas with Us
          </span>
        </h1>

        <span className=" sm:text-md mx-auto w-5/6 max-w-3xl p-2 text-center text-sm text-slate-400 md:text-lg">
          Informatics Open Project menyediakan berbagai layanan solusi web,
          aplikasi mobile, dan game terbaik untuk Anda.
        </span>

        <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row md:mt-8">
          <button
            className="filled-button"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => router.push("https://cal.com/iojek")}
          >
            Hubungi Kami
          </button>
          <button
            className="outline-button"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={() => router.push("/portofolio")}
          >
            Lihat Portofolio
          </button>
        </div>
      </div>
    </Container>
  );
};

Home.pageTitle = "Home";

export default Home;
