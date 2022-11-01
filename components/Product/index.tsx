import { CarouselProvider } from "pure-react-carousel";
import React, { useState } from "react";
import TabText from "../Common/TabText";
import Details from "./Details";
import DetailsCarousel from "./DetailsCarousel";

const images = [1, 2, 3];

const Product = () => {
  const [active, setActive] = useState<string>("description");
  return (
    <div className=" mt-24 lg:mt-8 contain space-y-8">
      {/* <h1>//BreadCurmbs</h1> */}
      <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10 ">
        <div className="col-span-12 lg:col-span-7">
          <CarouselProvider
            infinite
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={images.length}
            visibleSlides={1}
            isIntrinsicHeight
            className="w-full h-full"
          >
            <DetailsCarousel images={images} />
          </CarouselProvider>
        </div>
        <div className="col-span-12 lg:col-span-5 flex flex-col space-y-5 justify-between  lg:max-w-[400px] ">
          <Details />
        </div>
      </div>

      {/* Des, Rev, Spec */}
      <div className="flex flex-col space-y-8">
        <div className="grid grid-cols-3 w-full border-b-[1.5px] border-[#E4E4E7] ">
          <TabText text="description" active={active} setActive={setActive} />
          <TabText text="reviews" active={active} setActive={setActive} />
          <TabText
            text="specifications"
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
