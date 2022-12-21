import { Icon } from "@iconify/react";
import { CarouselProvider } from "pure-react-carousel";
import React from "react";
import Button from "../../../Common/Button";
import Rating from "../../../Common/Rating";
import DashHeader from "../DashHeader";
import { Box } from "../Home";
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
      <DashHeader page="Payment Details" />
      <div className="vendor_starter">
        <div className="w-full">
          <Box
            icon="la:money-bill-alt-solid"
            name="Amount"
            value="₦ 50,000,000"
          />
        </div>
        <div className="w-full space-y-10">
          <div className="grid grid-cols-2 gap-x-10 w-full ">
            <div className="w-full flex flex-col space-y-14">
              <SpecItem item="Order ID" value="129485855" />
              <SpecItem item="Date paid" value="9/23/12   12:32:12" />
              <SpecItem item="Action" value="N/A" />
            </div>
            <div className="w-full flex flex-col space-y-14">
              <SpecItem item="Status" value="Pending" />
              <SpecItem item="Disputed." value="James Franco" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
