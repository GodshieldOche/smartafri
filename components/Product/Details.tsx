import { Icon } from "@iconify/react";
import React from "react";
import Button from "../Common/Button";
import Rating from "../Common/Rating";

const Details = () => {
  return (
    <>
      {/* Name */}
      <h1 className="text-black text-base lg:text-xl xl:text-2xl font-semibold ">
        MAM Feed & Soothe Essential Soothe Essential
      </h1>
      {/* Rating */}
      <Rating />
      {/* Price */}
      <div className="space-y-5">
        <h1 className="text-primaryOne  text-xl lg:text-[28px] font-[700]  ">
          ₦20,000
        </h1>
        <div className="flex items-center space-x-2">
          <Icon icon="clarity:tag-solid" className="!text-grayOne !text-sm" />
          <span className="text-grayOne text-xs lg:text-sm ">
            excl. VAT , Free shipping
          </span>
        </div>
      </div>
      {/* Quantity */}
      <div className="flex items-center !mt-6 lg:!my-0 space-x-3 lg:space-x-6 ">
        <Icon
          icon="akar-icons:circle-minus-fill"
          className="!text-primaryOne !text-xl lg:!text-2xl cursor-pointer"
        />
        <h1 className="text-xs lg:text-base text-black  ">2</h1>
        <Icon
          icon="akar-icons:circle-plus-fill"
          className="!text-primaryOne !text-xl lg:!text-2xl cursor-pointer"
        />
      </div>
      {/* Action */}
      <div className="flex items-center !mt-5 lg:!my-0 space-x-3 md:space-x-5">
        <Button text="Add To Cart" />
        <div className="py-4 lg:py-3 px-5 lg:px-4 cursor-pointer bg-grayThree rounded-[5px] border border-grayTwo/30">
          <Icon icon="bi:heart-fill" className="!text-primaryOne !text-base" />
        </div>
      </div>
      <div className="space-y-4 lg:space-y-5">
        <div className="flex items-center space-x-2">
          <Icon
            icon="fluent:vehicle-truck-24-filled"
            className="!text-xl !text-primaryOne "
          />
          <h1 className="text-xs lg:text-sm text-[#52525B]">
            Free shipping worldwide
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <Icon icon="bxs:credit-card" className="!text-xl !text-primaryOne " />
          <h1 className="text-xs lg:text-sm text-[#52525B]">
            100% Secured Payment
          </h1>
        </div>
      </div>
    </>
  );
};

export default Details;
