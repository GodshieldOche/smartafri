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
  const [active, setActive] = useState(false);
  const [activeRight, setActiveRight] = useState(false);

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide);
    }
    carouselContext.subscribe(onChange);
    return () => carouselContext.unsubscribe(onChange);
  }, [carouselContext]);

  return (
    <>
      <div className="relative w-full  lg:px-6">
        <Slider className="bg-white w-full mx-auto">
          {array.map((item, index) => (
            <Slide key={index} index={index}>
              <div className="w-full relative h-full">
                <Image src={item} fill priority alt="slide1" />
              </div>
            </Slide>
          ))}
        </Slider>
        <div
          onMouseOver={() => setActive(true)}
          onMouseOut={() => setActive(false)}
          className={` ${
            active ? "opacity-100" : "opacity-0"
          } hidden absolute top-0 bottom-0  left-0 lg:flex flex-col items-center justify-center ml-6 p-3 h-full `}
        >
          <ButtonBack>
            <SlideButton icon="bi:arrow-left-short" />
          </ButtonBack>
        </div>
        <div
          onMouseOver={() => setActiveRight(true)}
          onMouseOut={() => setActiveRight(false)}
          className={` ${
            activeRight ? "opacity-100" : "opacity-0"
          } hidden absolute top-0 bottom-0 right-0 lg:flex flex-col items-center justify-center mr-6 p-3 h-full  `}
        >
          <ButtonNext>
            <SlideButton icon="bi:arrow-right-short" />
          </ButtonNext>
        </div>
      </div>
      <div className="space-x-3 w-full flex  mt-2 justify-center items-center">
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
