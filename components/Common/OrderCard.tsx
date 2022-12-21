import Image from "next/image";
import React from "react";

const OrderCard = () => {
  return (
    <div className="grid grid-cols-12 gap-x-5 border border-grayTwo/30 bg-white p-3  lg:py-4 lg:px-6 rounded-[8px] ">
      <div className=" col-span-2 sm:col-span-1 w-9 lg:w-[40px] h-[40px] relative justify-start">
        <Image
          src={
            "https://res.cloudinary.com/drck33djn/image/upload/v1671010146/bookit/product_hampua.png"
          }
          fill
          alt="image 1"
        />
      </div>
      <div className="col-span-7 lg:col-span-8 space-y-2 w-full">
        <h1 className="text-xs lg:text-sm font-semibold text-black ">
          MAM Feed & Soothe Essenti...
        </h1>
        <h1 className="text-[11px] lg:text-sm text-grayOne">
          Date: 22/02/22 05:23:23
        </h1>
        <h1 className="text-[13px] lg:text-base text-primaryOne font-semibold ">
          2,000
        </h1>
      </div>
      <div className="col-span-3 h-full flex flex-col justify-between w-full">
        <h1 className="text-end text-[11px] lg:text-sm text-primaryTwo ">
          Pending
        </h1>
        <h1 className="text-end text-[11px] lg:text-sm text-grayOne ">
          QTY: 23
        </h1>
      </div>
    </div>
  );
};

export default OrderCard;
