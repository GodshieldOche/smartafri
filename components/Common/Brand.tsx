import Image from "next/image";
import React from "react";

const Brand = () => {
  return (
    <div className="w-full p-3 flex items-center space-x-4 lg:space-x-6 bg-white rounded-[10px] ">
      <div className=" flex items-center justify-center rounded-full bg-[#F1F1F1] p-2  w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]">
        <div className="relative w-full h-full rounded-full">
          <Image
            src={`https://res.cloudinary.com/drck33djn/image/upload/v1667211582/image_19_kc5ruz.png`}
            fill
            alt="brand"
          />
        </div>
      </div>
      <h1 className=" font-semibold text-sm lg:text-lg text-primaryOne  ">
        Addidas
      </h1>
    </div>
  );
};

export default Brand;
