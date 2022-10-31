import { CarouselProvider } from "pure-react-carousel";
import React from "react";
import Brand from "../Common/Brand";
import Category from "../Common/Category";
import Section from "../Common/Section";
import Carousel from "./Carousel";
import ProductCarousel from "./ProductCarousel";

const categories = [
  { icon: "ic:baseline-agriculture", text: "Agriculture" },
  { icon: "healthicons:electricity", text: "Electronics" },
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

      <CarouselProvider
        infinite
        naturalSlideWidth={100}
        naturalSlideHeight={35}
        totalSlides={3}
        className="contain"
        interval={4000}
        isPlaying
      >
        <Carousel />
      </CarouselProvider>

      {/*Top Categories */}
      <div className="contain space-y-5">
        <h1 className="headingOne">Top Categories</h1>
        <div className="w-full flex items-center justify-between space-x-3 overflow-x-auto scroller">
          {categories.map((item, index) => (
            <Category icon={item.icon} text={item.text} key={index} />
          ))}
        </div>
      </div>

      {/*Top Selling Items */}
      <div className="sm:container mx-auto sm:px-[20px] space-y-5">
        <h1 className="headingOne px-[20px] sm:px-0">Top Selling Items</h1>
        <ProductCarousel products={products} />
      </div>

      {/* Sections */}
      <div className="bg-grayThree !mt-6 py-10">
        <div className="contain grid gap-4 grid-cols-2 md:grid-cols-4 justify-between">
          <Section
            // pos="lg:items-start items-center "
            text="We offer competitve prices on over 10 million items"
            title="Great Value"
            icon="entypo:price-tag"
          />
          <Section
            text="We offer competitve prices on over 10 million items"
            title="Worldwide Shipping"
            icon="fluent:vehicle-truck-24-filled"
          />
          <Section
            text="We offer competitve prices on over 10 million items"
            title="Safe Payment"
            icon="bxs:credit-card"
          />
          <Section
            // pos="lg:items-end items-center"
            text="We offer competitve prices on over 10 million items"
            title="Help Center"
            icon="fluent:chat-help-20-filled"
          />
        </div>
      </div>

      {/* Top Brands */}
      <div className="sm:container mx-auto sm:px-[20px] space-y-5">
        <h1 className="headingOne text-center">Top Brands</h1>
        <div className="w-full h-full relative p-6 bg-grayThree">
          <div className="grid gap-y-5 gap-x-4 grid-cols-2 md:grid-cols-4">
            <Brand />
            <Brand />
            <Brand />
            <Brand />
            <Brand />
            <Brand />
            <Brand />
            <Brand />
          </div>
        </div>
      </div>

      {/* Recently Viewd Item */}
      <div className="sm:container mx-auto sm:px-[20px] space-y-5">
        <h1 className="headingOne px-[20px] sm:px-0">Recently Viewed items</h1>
        <ProductCarousel products={products} />
      </div>
    </div>
  );
};

export default Home;