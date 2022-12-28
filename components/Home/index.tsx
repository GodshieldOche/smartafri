import Link from "next/link";
import { CarouselProvider } from "pure-react-carousel";
import React from "react";
import { product } from "../../interface";
import Brand from "../Common/Brand";
import Category from "../Common/Category";
import Section from "../Common/Section";
import Products from "../Products";
import Carousel from "./Carousel";
import ProductCarousel from "./ProductCarousel";

const categories = [
  { icon: "ic:baseline-agriculture", text: "agriculture" },
  { icon: "healthicons:electricity", text: "electronics" },
  { icon: "wpf:books", text: "books" },
  { icon: "maki:jewelry-store", text: "accessories" },
  { icon: "fluent:food-apple-20-filled", text: "groceries" },
  { icon: "ic:baseline-fitness-center", text: "fitness" },
];

interface Props {
  products: product[];
}

const Home: React.FC<Props> = ({ products }) => {
  return (
    <div className=" my-6 lg:mt-[65px] space-y-8 xl:space-y-10">
      {/* Slide Show */}

      <CarouselProvider
        infinite
        naturalSlideWidth={100}
        naturalSlideHeight={32}
        totalSlides={3}
        className="contain"
        interval={4000}
        isIntrinsicHeight
        isPlaying
      >
        <Carousel />
      </CarouselProvider>

      {/*Top Categories */}
      <div className="contain space-y-5">
        <div className="flex justify-between">
          <h1 className="headingOne">Top Categories</h1>
          <Link href="/agriculture">
            <h2 className="text-grayOne text-[13px] lg:text-base ">See All</h2>
          </Link>
        </div>

        <div className="w-full flex items-center justify-between space-x-2 lg:space-x-3 overflow-x-auto scroller">
          {categories.map((item, index) => (
            <Category icon={item.icon} text={item.text} key={index} />
          ))}
        </div>
      </div>

      {/*Top Selling Items */}
      {products && <Products products={products} title="Top Selling Items" />}

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
      <div className="sm:container mx-auto sm:px-10 space-y-5">
        <div className="flex justify-between px-[20px] sm:px-0">
          <h1 className="headingOne">Top Brand</h1>
          <Link href="">
            <h2 className="text-grayOne text-[13px] lg:text-base ">See All</h2>
          </Link>
        </div>
        <div className="w-full h-full relative p-6 bg-grayThree">
          <div className="grid gap-y-5 gap-x-4 grid-cols-2 md:grid-cols-4">
            <Brand brand="adiddas" />
            <Brand brand="adiddas" />
            <Brand brand="adiddas" />
            <Brand brand="adiddas" />
            <Brand brand="adiddas" />
            <Brand brand="adiddas" />
            <Brand brand="adiddas" />
            <Brand brand="adiddas" />
          </div>
        </div>
      </div>

      {/* Recently Viewd Item */}
      {products && (
        <Products products={products} title="Recently Viewed items" />
      )}
    </div>
  );
};

export default Home;
