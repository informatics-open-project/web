import Container from "@/components/Container";
import PortofolioCard from "@/components/PortofolioCard";
import portofolioConfig from "@/config/portofolioConfig";

const Portofolio = () => {
  return (
    <Container>
      <div className="p-6">
        <div className="mt-0 mb-8 flex justify-center md:mt-16 md:mb-28">
          <span className="text-4xl font-bold md:text-6xl">Portofolio</span>
        </div>

        <div className="columns-1 gap-6 md:columns-2">
          {portofolioConfig.map((item) => (
            <PortofolioCard key={item.id} data={item} showLink />
          ))}
        </div>
      </div>
    </Container>
  );
};

Portofolio.title = "Portofolio";

export default Portofolio;
