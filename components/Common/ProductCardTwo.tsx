import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Rating from "./Rating";

const ProductCardTwo = () => {
  const [showAddToCart, setShowAddToCart] = useState(false);
  const router = useRouter();

  const isVendor = router.pathname.includes("vendor");

  return (
    <div className="flex flex-col bg-white rounded-[6px] lg:rounded-[10px] w-full shadow-sm border border-[#b0babf]/20  ">
      <div
        onMouseOver={() => {
          !isVendor && setShowAddToCart(true);
        }}
        onMouseOut={() => {
          !isVendor && setShowAddToCart(false);
        }}
        className={` ${
          isVendor ? "h-[150px] lg:h-[170px]" : "h-[150px] lg:h-[210px]"
        } relative w-full  flex items-center justify-center bg-[#F1F1F1] rounded-t-[6px] lg:rounded-t-[10px] `}
      >
        <div
          className={` ${
            isVendor ? "lg:w-[120px] lg:h-[120px]" : "lg:w-[145px] lg:h-[145px]"
          } w-[80px] h-[80px]  relative`}
        >
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
      <div className="flex flex-col !my-4 lg:!my-6 px-4 space-y-3">
        <Link href={`/products/1`}>
          <h1
            className={`${
              isVendor ? "text-xs lg:text-sm " : "text-xs lg:text-lg "
            } font-medium text-black`}
          >
            MAM Feed & Soothe...
          </h1>
        </Link>
        <h1
          className={` ${
            isVendor ? "text-sm lg:text-lg" : "text-sm lg:text-xl "
          } text-primaryOne   font-[700]  `}
        >
          ₦20,000
        </h1>
        <Rating />
      </div>
    </div>
  );
};

export default ProductCardTwo;
