import Container from "@/components/Container";

const About = () => {
  return (
    <Container>
      <div className="min-h-[calc(100vh-208px)] p-6">
        <div className="mt-0 mb-8 flex justify-center md:mt-16 md:mb-28">
          <span className="text-4xl font-bold md:text-6xl">
            Syarat dan Ketentuan
          </span>
        </div>

        <div className="mb-12 w-full text-center md:mb-28">
          <iframe
            width="100%"
            height="100vh"
            className="mx-auto h-screen max-w-[724px]"
            src="/syarat-ketentuan.pdf"
          />
        </div>
      </div>
    </Container>
  );
};

About.title = "About Us";

export default About;
