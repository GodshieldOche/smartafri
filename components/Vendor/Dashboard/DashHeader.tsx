import Image from "next/image";
import React from "react";

const DashHeader = () => {
  return (
    <div className="w-full py-3 px-10 bg-primaryOne flex items-center justify-between">
      <h1 className="text-xl text-white font-medium ">Home</h1>
      <div className="rounded-[20px] bg-[#FAFAFA]  p-2 !pr-6 flex space-x-2 items-center ">
        <div className="relative w-[24px] h-[24px] rounded-full">
          <Image
            src={`https://res.cloudinary.com/drck33djn/image/upload/v1641273086/bookit/avatars/vxzwmriyvmbgqkghvz5f.jpg`}
            fill
            className="rounded-full w-full h-full object-cover object-top"
            alt=""
          />
        </div>
        <h2 className="text-sm capitalize text-primaryOne font-medium ">
          Nestle Ltd
        </h2>
      </div>
    </div>
  );
};

export default DashHeader;
