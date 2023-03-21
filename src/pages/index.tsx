import Container from "@/components/Container";

const Home = () => {
  return (
    <Container>
      <div className="flex flex-col items-center gap-4 p-4">
        <div className="rounded-full bg-blue-500 px-4 py-2 text-sm font-bold tracking-wide text-white">
          Coming Soon
        </div>

        <div className="max-w-[704px] p-4 pb-0 text-center text-5xl font-extrabold tracking-tight text-slate-900 md:p-6  md:text-7xl lg:text-8xl">
          Revolutionize Your Ideas with Us
        </div>

        <span className=" sm:text-md mx-auto w-5/6 max-w-3xl p-2 text-center text-sm text-slate-600 dark:text-slate-400 md:text-lg">
          Informatics Open Project menyediakan berbagai layanan solusi web,
          aplikasi mobile, dan game terbaik untuk Anda.
        </span>

        <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row md:mt-8">
          <button className="filled-button">Hubungi Kami</button>
          <button className="outline-button">Lihat Portofolio</button>
        </div>
      </div>
    </Container>
  );
};

Home.pageTitle = "Home";

export default Home;
