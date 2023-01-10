import { Icon } from "@iconify/react";
import React from "react";

const Item: React.FC<{ icon: string; text: string }> = ({ icon, text }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-[6px]">
      <Icon icon={icon} className="!text-xl !text-[#B1B1B1]" />
      <h2 className="text-[13px] text-[#B1B1B1] ">{text}</h2>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="fixed lg:hidden left-0 right-0 bottom-0 py-3 px-4 md:px-10 bg-white flex justify-between items-center ">
      <Item icon="bx:home-alt-2" text="Home" />
      <Item icon="bi:box-seam" text="Products" />
      <Item icon="foundation:graph-bar" text="Sales" />
      <Item icon="la:cash-register" text="Payments" />
    </div>
  );
};

export default Footer;
