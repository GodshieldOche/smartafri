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
        <div className=" w-full h-full flex  ">
          <div className="w-[20%] fixed left-0 top-0 bottom-0 hidden lg:flex  bg-[#252A2F]  overflow-hidden  flex-col items-center pt-6 space-y-12 ">
            <Image className="cursor-pointer" src={main} priority alt="logo" />
            <DashLinks />
          </div>
          <div className=" w-[100%] lg:ml-[20%] lg:w-[80%] h-full relative max-h-screen scroller overflow-y-auto">
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
