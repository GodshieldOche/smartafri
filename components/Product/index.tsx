import { CarouselProvider } from "pure-react-carousel";
import React, { useState } from "react";
import TabText from "../Common/TabText";
import Products from "../Products";
import Description from "./Description";
import Details from "./Details";
import DetailsCarousel from "./DetailsCarousel";
import Reviews from "./Reviews";
import Specifications from "./Specifications";

const images = [
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
];

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Product = () => {
  const [active, setActive] = useState<string>("description");
  return (
    <div className=" lg:!mt-[120px]  space-y-8">
      {/* <h1>//BreadCurmbs</h1> */}
      <div className="contain grid grid-cols-12 gap-y-10 lg:gap-x-10 ">
        <div className="col-span-12 lg:col-span-7">
          <CarouselProvider
            infinite
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            totalSlides={images.length}
            visibleSlides={1}
            isIntrinsicHeight
            dragStep={1}
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
      <div className="contain flex flex-col space-y-5 lg:space-y-7">
        <div className="grid grid-cols-3 w-full border-b-[1.5px] border-[#E4E4E7] ">
          <TabText text="description" active={active} setActive={setActive} />
          <TabText text="reviews" active={active} setActive={setActive} />
          <TabText
            text="specifications"
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="w-full">
          {active === "description" && <Description />}
          {active === "reviews" && <Reviews />}
          {active === "specifications" && <Specifications />}
        </div>
      </div>

      {/* Recently Viewed */}
      <Products products={products} title="Recently Viewed items" />
      {/* You may also like */}
      <Products products={products} title="You may also like" />
    </div>
  );
};

export default Product;
