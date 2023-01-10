import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";

interface Props {
  children: React.ReactNode;
}

const VendorAuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full overflow-hidden grid grid-cols-12 ">
      <div className="col-span-12 md:hidden w-full h-[357px] relative  ">
        <Image
          src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1673321237/heroMobile_wvk88b.png"
          fill
          priority
          alt="image"
        />
      </div>
      <div className="hidden col-span-12 md:block lg:hidden w-full h-[400px] relative  ">
        <Image
          src="https://res.cloudinary.com/drck33djn/image/upload/v1669287601/Frame_31939_1_pgyty3.png"
          fill
          priority
          alt="image"
        />
      </div>
      <div className="col-span-12 lg:col-span-5 lg:pl-12 lg:py-14 px-4 sm:px-10 !mt-6 lg:mt-0 lg:px-0 w-full flex flex-col items-center lg:space-y-14 overflow-y-auto scroller">
        <div className=" hidden lg:block">
          <Image className="cursor-pointer" src={logo} priority alt="logo" />
        </div>
        {children}
      </div>
      <div className=" hidden lg:block fixed right-0 top-0 bottom-0 w-[55%]">
        <div className=" w-full h-full relative">
          <Image
            src="https://res.cloudinary.com/drck33djn/image/upload/v1669287601/Frame_31939_1_pgyty3.png"
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            fill
            priority
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default VendorAuthLayout;
