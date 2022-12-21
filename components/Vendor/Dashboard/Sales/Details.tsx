import { Icon } from "@iconify/react";
import { CarouselProvider } from "pure-react-carousel";
import React from "react";
import Button from "../../../Common/Button";
import Rating from "../../../Common/Rating";
import DashHeader from "../DashHeader";
import DetailsCarousel from "../Products/DetailsCarousel";

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
      <DashHeader page="Sales Details" />
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
        <div className="w-full space-y-10">
          <div className="grid grid-cols-2 gap-x-10 w-full ">
            <div className="w-full flex flex-col space-y-14">
              <SpecItem item="Order ID" value="129485855" />
              <SpecItem item="Item" value="Louis Vuitton Shoes" />
              <SpecItem item="Receiver" value="James Franco" />
              <SpecItem item="Destination" value="Ekiti State" />
              <SpecItem item="Created" value="9/23/12 12:32:12" />
            </div>
            <div className="w-full flex flex-col space-y-14">
              <SpecItem item="Modified." value="N/A" />
              <SpecItem item="Total" value=" ₦ 35,678.99" />
              <SpecItem item="Status" value="In progress" />
              <SpecItem item="Action" value="0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
