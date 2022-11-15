import Image from "next/image";
import React from "react";

const OrderCard = () => {
  return (
    <div className="grid grid-cols-12 gap-x-5 border border-grayTwo/30 bg-white py-4 px-6 rounded-[8px] ">
      <div className="col-span-1 w-[40px] h-[40px] relative justify-start">
        <Image
          src={
            "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1667045382/SmartAfri/image_15_li0hjz.png"
          }
          fill
          alt="image 1"
        />
      </div>
      <div className="col-span-8 space-y-2 w-full">
        <h1 className="text-sm font-semibold text-black ">
          MAM Feed & Soothe Essenti...
        </h1>
        <h1 className="text-sm text-grayOne">Date: 22/02/22 05:23:23</h1>
        <h1 className="text-base text-primaryOne font-semibold ">2,000</h1>
      </div>
      <div className="col-span-3 h-full flex flex-col justify-between w-full">
        <h1 className="text-end text-sm text-primaryTwo ">Pending</h1>
        <h1 className="text-end text-sm text-grayOne ">Quantity: 23 Pcs</h1>
      </div>
    </div>
  );
};

export default OrderCard;
