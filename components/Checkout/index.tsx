import React from "react";
import NavItems from "./NavItems";

const Checkout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="!mt-[100px] lg:!mt-[120px] contain grid grid-cols-12 gap-x-5 justify-start  items-start   ">
      <div className={`hidden lg:flex lg:!col-span-3  flex-col space-y-4  `}>
        <NavItems />
      </div>
      <div
        className={`col-span-12 lg:col-span-9  h-full lg:px-8 py-2 lg:py-6  lg:bg-grayThree`}
      >
        {children}
      </div>
    </div>
  );
};

export default Checkout;
