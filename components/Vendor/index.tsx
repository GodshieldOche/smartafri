import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import main from "../../public/main.png";
import VendorAuthLayout from "./Auth";
import DashHeader from "./Dashboard/DashHeader";
import DashLinks from "./Dashboard/DashLinks";

interface Props {
  children: React.ReactNode;
}

const VendorLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="w-full h-full">
      {!router.pathname.includes("vendor/auth/") ? (
        <div className="grid grid-cols-5 w-full h-full ">
          <div className=" hidden lg:flex col-span-1 bg-[#252A2F] h-screen max-h-screen overflow-hidden  flex-col items-center pt-6 space-y-12 ">
            <Image className="cursor-pointer" src={main} priority alt="logo" />
            <DashLinks />
          </div>
          <div className=" col-span-5 lg:col-span-4 w-full h-full max-h-screen scroller overflow-y-auto">
            <DashHeader />
            {children}
          </div>
        </div>
      ) : (
        <VendorAuthLayout>{children}</VendorAuthLayout>
      )}
    </div>
  );
};

export default VendorLayout;
