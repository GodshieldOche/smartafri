import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";

interface Props {
  children: React.ReactNode;
}

const VendorAuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-full overflow-hidden grid grid-cols-12 ">
      <div className="col-span-5 pl-12 py-14 w-full flex flex-col items-center space-y-14 overflow-y-auto scroller">
        <div className="hidden md:block">
          <Image className="cursor-pointer" src={logo} priority alt="logo" />
        </div>
        {children}
      </div>
      <div className="fixed right-0 top-0 bottom-0 w-[55%]">
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
