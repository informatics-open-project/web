import React from "react";
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const autoplayOptions = {
  delay: 3000,
};

type PropType = {
  slides: {
    name: string;
    role: string;
    testimony: string;
    image: string;
  }[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item) => (
            <div
              className="embla__slide flex flex-col items-center gap-4 md:items-start"
              key={item.name}
            >
              <div className="relative w-5/6 max-w-[768px] rounded-xl bg-blue-50 p-6 text-justify text-xs tracking-wide md:w-full md:text-sm">
                <span className="font-bold">{'"'}</span>
                {item.testimony}
                <span className="font-bold">{'"'}</span>
                <div className="absolute -bottom-2 right-0 left-0 mx-auto w-min border-x-8 border-t-8 border-b-0 border-solid border-x-transparent border-t-blue-50 md:left-10 md:mx-0" />
              </div>
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <Image
                  className="embla__slide__img !h-16 !w-16 rounded-full md:ml-2 md:!h-20 md:!w-20"
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
                  src={item.image}
                  alt={item.name}
                  width={1000}
                  height={1000}
                />
                <div className="flex flex-col justify-center">
                  <span className="text-md font-bold md:text-xl">
                    {item.name}
                  </span>
                  <span className="md:text-md text-sm">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
