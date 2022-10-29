import React, { useContext, useEffect, useState } from "react";
import {
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
import SlideButton from "../Common/SlideButton";

const array = [
  "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1666964647/SmartAfri/image_14_yptkll.png",
  "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1666964647/SmartAfri/image_14_yptkll.png",
  "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1666964647/SmartAfri/image_14_yptkll.png",
];

const Carousel = () => {
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
    <>
      <Slider className="bg-white">
        {array.map((item, index) => (
          <Slide key={index} index={index}>
            <Image src={item} fill priority alt="slide1" />
          </Slide>
        ))}
      </Slider>
      <div className="hidden lg:block absolute top-[50%] left-4 ">
        <ButtonBack>
          <SlideButton icon="bi:arrow-left-short" />
        </ButtonBack>
      </div>
      <div className="hidden lg:block absolute top-[50%] right-4 ">
        <ButtonNext>
          <SlideButton icon="bi:arrow-right-short" />
        </ButtonNext>
      </div>
      <div className="space-x-3 w-full flex lg:hidden mt-2 justify-center items-center">
        {array.map((item, index) => (
          <Dot
            className={`w-4 h-1 ${
              currentSlide === index ? "bg-primaryOne" : "bg-grayTwo"
            }  rounded-full`}
            key={index}
            slide={index}
          ></Dot>
        ))}
      </div>
    </>
  );
};

export default Carousel;
