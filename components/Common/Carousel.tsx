import React, { useContext, useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  CarouselContext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import { Icon } from "@iconify/react";

const array = [
  "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1666964647/SmartAfri/image_14_yptkll.png",
  "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1666964647/SmartAfri/image_14_yptkll.png",
  "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1666964647/SmartAfri/image_14_yptkll.png",
];

const Carousel = () => {
  //   const carouselContext = useContext();
  //   const [currentSlide, setCurrentSlide] = useState(
  //     CarouselProvider.propTypes?.currentSlide
  //   );

  //   const [currentSlide, setCurrentSlide] = useState(
  //     carouselContext.state.currentSlide
  //   );

  //   useEffect(() => {

  //   }, [carouselContext]);

  return (
    <div className="w-full h-full relative max-h-[400px] max-w-[1200px] mx-auto">
      <CarouselProvider
        infinite
        naturalSlideWidth={100}
        naturalSlideHeight={38}
        totalSlides={3}
        className="lg:px-14"
        interval={3000}
        isPlaying
      >
        <Slider className="bg-white" onWheel={() => console.log("scrolled")}>
          {array.map((item, index) => (
            <Slide
              key={index}
              index={index}
              onWheel={() => console.log("please work")}
            >
              <Image
                src={`https://res.cloudinary.com/dk6uhtgvo/image/upload/v1666964647/SmartAfri/image_14_yptkll.png`}
                fill
                priority
                alt="slide1"
              />
            </Slide>
          ))}
        </Slider>
        <div className="absolute top-0 left-0 bottom-0 right-0 w-full h-full hidden lg:flex items-center justify-between">
          <ButtonBack className="p-1 bg-primaryOne rounded-full">
            <Icon
              icon="bi:arrow-left-short"
              className="!text-3xl !text-white"
            />
          </ButtonBack>
          <ButtonNext className="p-1 bg-primaryOne rounded-full">
            <Icon
              icon="bi:arrow-right-short"
              className="!text-3xl !text-white"
            />
          </ButtonNext>
        </div>
        <div className="space-x-3 w-full flex mt-2 justify-center items-center">
          {array.map((item, index) => (
            <Dot
              className="w-4 h-1 bg-primaryOne rounded-full"
              key={index}
              slide={index}
            ></Dot>
          ))}
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Carousel;
