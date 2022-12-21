import { Icon } from "@iconify/react";
import { CarouselProvider } from "pure-react-carousel";
import React from "react";
import Button from "../../../Common/Button";
import Rating from "../../../Common/Rating";
import DashHeader from "../DashHeader";
import DetailsCarousel from "./DetailsCarousel";

const images = [
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
  "https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png",
];

const SpecItem: React.FC<{ item: string; value: string }> = ({
  item,
  value,
}) => {
  return (
    <div className="w-full flex justify-between items-start">
      <h1 className="text-sm text-grayOne ">{item}</h1>
      <h1 className="text-sm font-medium max-w-[228px]">{value}</h1>
    </div>
  );
};

const Details = () => {
  return (
    <div className="w-full">
      <DashHeader page="Product Details" />
      <div className="vendor_starter">
        <div className="w-full">
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
        <div className="w-full space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-lg text-medium">MAM Feed & Soothe Essential</h1>
            <Icon
              icon="akar-icons:trash-can"
              className="!text-xl !text-grayOne cursor-pointer "
            />
          </div>
          <h1 className="text-xl text-primaryOne font-bold !mt-3 ">₦20,000</h1>
          <Rating />
          {/*  */}
          <div className="w-full space-y-3 !mt-10">
            <h1 className="text-lg font-semibold">Description</h1>
            <p className="text-base text-grayOne leading-8 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore maet dolore maet
              dolore maet dolore maet dolore maet dolore maet dolore maet dolore
              maet dolore maet dolore maet dolore maet dolore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi utet dolore maet dolore maet dolore maet dolore ma .
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi utet dolore maet dolore maet dolore maet dolore ma
            </p>
          </div>
          <div className="w-full flex justify-between items-center space-x-10">
            <Button text="Preview" width="w-full" color="bg-[#63C092]" />
            <Button text="Edit" width="w-full" color="bg-primaryOne" />
          </div>
        </div>

        <div className="w-full space-y-10">
          <h1 className="text-lg font-semibold ">Specifications</h1>
          <div className="grid grid-cols-2 gap-x-10 w-full ">
            <div className="w-full flex flex-col space-y-14">
              <SpecItem item="Status" value="Drafts" />
              <SpecItem item="SKU" value="N/A" />
              <SpecItem item="Width" value="0" />
              <SpecItem item="Weight" value="0" />
              <SpecItem item="Created" value="9/23/12 12:32:12" />
            </div>
            <div className="w-full flex flex-col space-y-14">
              <SpecItem item="Part No." value="N/A" />
              <SpecItem item="Categoty" value="N/A" />
              <SpecItem item="Height" value="0" />
              <SpecItem item="Quantity" value="0" />
              <SpecItem
                item="Location"
                value="Abuja, Municipal Area Council
                Federal Capital Territory
                900001, Nigeria"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
