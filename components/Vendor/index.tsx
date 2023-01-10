import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import main from "../../public/white.png";
import VendorAuthLayout from "./Auth";
import DashLinks from "./Dashboard/DashLinks";
import Footer from "./Dashboard/Footer";

interface Props {
  children: React.ReactNode;
}

const VendorLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="w-full h-full">
      {!router.pathname.includes("vendor/auth/") ? (
        <div className="grid grid-cols-5 w-full h-full ">
          <div className="col-span-1 hidden lg:flex  bg-[#252A2F] h-screen overflow-hidden  flex-col items-center pt-6 space-y-12 ">
            <Image className="cursor-pointer" src={main} priority alt="logo" />
            <DashLinks />
          </div>
          <div className=" col-span-5 lg:col-span-4 w-full h-full relative max-h-screen scroller overflow-y-auto">
            {children}
          </div>
          <Footer />
        </div>
      ) : (
        <VendorAuthLayout>{children}</VendorAuthLayout>
      )}
    </div>
  );
};

export default VendorLayout;
