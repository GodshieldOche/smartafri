import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="flex flex-col bg-white rounded-[10px] w-fit tinyborder shadow-sm !my-2 ">
      <div className=" w-[210px] h-[150px] lg:w-[280px] lg:h-[216px] flex items-center justify-center bg-[#F1F1F1] rounded-t-[10px] ">
        <div className=" w-[80px] h-[80px] lg:w-[145px] lg:h-[145px] relative">
          <Image
            src={
              "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1667045382/SmartAfri/image_15_li0hjz.png"
            }
            fill
            alt="image 1"
          />
        </div>
      </div>
      <div className="flex flex-col !my-6 px-4 space-y-3">
        <h1 className="text-xs lg:text-base font-medium text-black">
          MAM Feed & Soothe Essenti...
        </h1>
        <h1 className="text-primaryOne  text-base lg:text-xl font-[700]  ">
          ₦20,000
        </h1>
        <div className="flex space-x-1">
          <Icon
            icon="radix-icons:star-filled"
            className="!text-sm lg:!text-base  !text-primaryThree"
          />
          <Icon
            icon="radix-icons:star-filled"
            className="!text-sm lg:!text-base  !text-primaryThree"
          />
          <Icon
            icon="radix-icons:star-filled"
            className="!text-sm lg:!text-base  !text-primaryThree"
          />
          <Icon
            icon="radix-icons:star-filled"
            className="!text-sm lg:!text-base  !text-grayTwo"
          />
          <Icon
            icon="radix-icons:star-filled"
            className="!text-sm lg:!text-base  !text-grayTwo"
          />
          <span className="text-[11px] lg:text-xs text-grayOne !ml-2">
            8,345
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
