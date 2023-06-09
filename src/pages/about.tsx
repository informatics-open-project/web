import Container from "@/components/Container";
import aboutConfig from "@/config/aboutConfig";
import Image from "next/image";

const About = () => {
  return (
    <Container>
      <div className="min-h-[calc(100vh-208px)] p-6">
        <div className="mt-0 mb-8 flex justify-center md:mt-16 md:mb-28">
          <span className="text-center text-4xl font-bold md:text-6xl">
            Tentang Kami
          </span>
        </div>

        <div className="w-full text-center">
          <div className="mt-0 mb-4 flex justify-center md:mt-16 md:mb-12">
            <span className="text-2xl font-bold md:text-4xl">Tim Kami</span>
          </div>

          <div
            className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3`}
          >
            {aboutConfig.map((item) => (
              <div className="about-card" key={item.id}>
                <Image
                  className="h-40 w-40 rounded-full object-cover object-center"
                  src={item.image}
                  alt="content"
                  width={40}
                  height={40}
                />
                <h1 className="title-font text-center text-lg font-bold text-gray-900">
                  {item.name}
                </h1>
                <p className="text-center text-xs leading-relaxed text-slate-400 md:text-sm">
                  {item.role}
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                  {item.social.map((social) => (
                    <a
                      href={social.href}
                      className="cursor-pointer text-xs leading-relaxed text-slate-600 hover:underline md:text-sm"
                      key={social.title}
                      target="_blank"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

About.title = "About Us";

export default About;
