import { CarouselProvider } from "pure-react-carousel";
import React from "react";
import Category from "../Common/Category";
import Carousel from "./Carousel";
import ProductCarousel from "./ProductCarousel";

const categories = [
  { icon: "ic:baseline-agriculture", text: "Agriculture" },
  { icon: "healthicons:electricity-outline", text: "Electronics" },
  { icon: "wpf:books", text: "Books" },
  { icon: "maki:jewelry-store", text: "Accessories" },
  { icon: "fluent:food-apple-20-filled", text: "Groceries" },
  { icon: "ic:baseline-fitness-center", text: "Fitness" },
];

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Home = () => {
  return (
    <div className=" my-6 lg:mt-[80px] space-y-8 xl:space-y-10">
      {/* Slide Show */}
      <div className="contain w-full h-full relative max-w-[1200px] mx-auto">
        <CarouselProvider
          infinite
          naturalSlideWidth={100}
          naturalSlideHeight={38}
          totalSlides={3}
          className="lg:px-12"
          interval={4000}
          isPlaying
        >
          <Carousel />
        </CarouselProvider>
      </div>

      {/*Top Categories */}
      <div className="contain">
        <h1 className="headingOne">Top Categories</h1>
        <div className="w-full flex items-center justify-between space-x-3 overflow-x-auto scroller mt-5">
          {categories.map((item, index) => (
            <Category icon={item.icon} text={item.text} key={index} />
          ))}
        </div>
      </div>

      {/*Top Selling Items */}
      <div className="sm:container mx-auto sm:px-[19px]">
        <h1 className="headingOne px-[19px] sm:px-0">Top Selling Items</h1>
        <ProductCarousel products={products} />
      </div>
    </div>
  );
};

export default Home;
