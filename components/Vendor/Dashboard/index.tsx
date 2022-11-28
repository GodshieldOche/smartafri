import Image from "next/image";
import React from "react";
import main from "../../../public/main.png";
import DashHeader from "./DashHeader";
import DashLinks from "./DashLinks";

const VendorDashLayout = () => {
  return (
    <div className="grid grid-cols-5 min--h-screen ">
      <div className="col-span-1 bg-[#252A2F] h-screen max-h-screen flex flex-col items-center pt-6 space-y-12 ">
        <Image className="cursor-pointer" src={main} priority alt="logo" />
        <DashLinks />
      </div>
      <div className="col-span-4 w-full h-full">
        <DashHeader />
      </div>
    </div>
  );
};

export default VendorDashLayout;
