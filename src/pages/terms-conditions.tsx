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
            src="https://docs.google.com/document/d/e/2PACX-1vRY-tUpyXx5k3hvvgKjb8wJrISAsnpngQvMFDdPmX6UX9dNgXwMPG1MbJVvNywz3RFefN-q6Lvql26X/pub?embedded=true"
          />
        </div>
      </div>
    </Container>
  );
};

About.pageTitle = "About Us";

export default About;
