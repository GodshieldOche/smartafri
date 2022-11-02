import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <div className="flex space-x-3 lg:space-x-6 pb-5 border-b  border-[#848383]/20 ">
      <div className="">
        <div className="relative w-[48px] h-[48px] lg:w-[55px] lg:h-[55px] rounded-full">
          <Image
            src={`https://res.cloudinary.com/drck33djn/image/upload/v1667296275/w51_1_1_llckia.png`}
            fill
            className="rounded-full w-full h-full object-cover object-top"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col space-y-3 lg:space-y-4 ">
        <div className="flex space-x-1">
          <Icon
            icon="radix-icons:star-filled"
            className="!text-sm lg:!text-lg  !text-primaryThree"
          />
          <Icon
            icon="radix-icons:star-filled"
            className="!text-sm lg:!text-lg  !text-primaryThree"
          />
          <Icon
            icon="radix-icons:star-filled"
            className="!text-sm lg:!text-lg  !text-primaryThree"
          />
          <Icon
            icon="radix-icons:star-filled"
            className="!text-sm lg:!text-lg  !text-grayTwo"
          />
          <Icon
            icon="radix-icons:star-filled"
            className="!text-sm lg:!text-lg  !text-grayTwo"
          />
        </div>
        <p className="paragraph w-full max-w-[928px] ">
          You made it so simple. My new site is so much faster and easier to
          work with than my old site. I just choose the page, make the changes.
        </p>
        <div className=" py-2">
          <h1 className="text-sm font-medium lg:font-semibold text-primaryOne ">
            Kristin Watson
          </h1>
          <h2 className="text-sm text-grayOne">March 14, 2021</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
