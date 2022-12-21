import Image from "next/image";
import { CarouselContext, Dot, Slide, Slider } from "pure-react-carousel";
import React, { useContext, useState, useEffect } from "react";

const DetailsCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  const carouselContext = useContext(CarouselContext);
  const [currentSlide, setCurrentSlide] = useState(
    carouselContext.state.currentSlide
  );

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  return (
    <div className="relative w-full h-full  grid gap-y-3 lg:gap-0 grid-cols-12">
      <Slider className="col-span-12 lg:col-span-9 justify-center overflow-hidden ">
        {images.map((item, index) => (
          <Slide key={index} index={index}>
            <div className="relative w-full h-[270px] md:h-[325px] lg:h-[460px] ">
              <Image
                src={item}
                fill
                sizes=""
                className="w-full h-full object-top rounded-[5px] object-cover"
                alt="Image Detail"
              />
            </div>
          </Slide>
        ))}
      </Slider>
      <div className="col-span-12 lg:col-span-3 lg:pl-5 space-x-3 lg:space-x-0 lg:space-y-2 flex flex-row lg:flex-col text-white">
        {images.map((item, index) => (
          <Dot
            key={index}
            slide={index}
            className={` ${
              currentSlide === index ? "border-2 border-primaryOne" : "border-0"
            } relative w-full  max-w-[72px] lg:max-w-full h-[72px]  lg:h-[84px] rounded-[5px] overflow-hidden`}
          >
            <Image
              src={item}
              fill
              className="w-full h-full object-cover object-top rounded-[5px]"
              alt="Image Detail"
            />
          </Dot>
        ))}
      </div>
    </div>
  );
};

export default DetailsCarousel;
