import Container from "@/components/Container";

const About = () => {
  return (
    <Container>
      <div className="min-h-[calc(100vh-208px)] p-6">
        <div className="mt-0 mb-8 flex justify-center md:mt-16 md:mb-28">
          <span className="text-4xl font-bold md:text-6xl">
            Kebijakan Privasi
          </span>
        </div>

        <div className="w-full text-center">
          <p className="sm:text-md mx-auto w-5/6 max-w-3xl p-2 text-center text-sm text-slate-400 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse
            nam iusto ipsa voluptatem rem consectetur ut aspernatur hic! Aliquam
            sed aut ratione facilis illum placeat assumenda dolorum ab
            laudantium?
          </p>
        </div>
      </div>
    </Container>
  );
};

About.pageTitle = "About Us";

export default About;
