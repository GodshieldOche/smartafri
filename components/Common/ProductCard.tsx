import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";

const ProductCard = () => {
  const [showAddToCart, setShowAddToCart] = useState(false);

  return (
    <div className="flex flex-col bg-white rounded-[10px] w-fit shadow-sm border-[#b0babf]/20 !my-2 ">
      <div
        onMouseOver={() => setShowAddToCart(true)}
        onMouseOut={() => setShowAddToCart(false)}
        className=" relative w-[205px] h-[150px] lg:w-[275px] lg:h-[210px] flex items-center justify-center bg-[#F1F1F1] rounded-t-[10px] "
      >
        <div className=" w-[80px] h-[80px] lg:w-[145px] lg:h-[145px] relative">
          <Image
            src={
              "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1667045382/SmartAfri/image_15_li0hjz.png"
            }
            fill
            alt="image 1"
          />
        </div>
        {showAddToCart && (
          <div className="absolute hidden lg:block bottom-5 py-2 px-6 lg:px-7 bg-primaryOne text-white text-xs lg:text-sm cursor-pointer">
            Add To Cart
          </div>
        )}
      </div>
      <div className="flex flex-col !my-6 px-4 space-y-3">
        <Link href={`/products/1`}>
          <h1 className="text-xs lg:text-base font-medium text-black">
            MAM Feed & Soothe Essenti...
          </h1>
        </Link>
        <h1 className="text-primaryOne  text-base lg:text-xl font-[700]  ">
          ₦20,000
        </h1>
        <Rating />
      </div>
    </div>
  );
};

export default ProductCard;
