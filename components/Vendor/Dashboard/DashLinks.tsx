import { Icon } from "@iconify/react";
import React from "react";

interface Props {
  icon: string;
  text: string;
  active?: boolean;
}

const Link: React.FC<Props> = ({ icon, text, active }) => {
  return (
    <div
      className={`w-full flex items-center py-4 px-10 space-x-4 ${
        active ? "bg-primaryOne" : ""
      } cursor-pointer`}
    >
      <Icon
        icon={icon}
        className={`text-xl ${active ? "text-white" : "text-[#B1B1B1]"}  `}
      />
      <h1
        className={`"text-lg ${
          active ? "text-white" : "text-[#B1B1B1]"
        } font-medium "`}
      >
        {text}
      </h1>
    </div>
  );
};

const DashLinks = () => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <Link icon="bx:home-alt-2" text="Home" active={true} />
      <Link icon="bi:box-seam" text="Products" />
      <Link icon="foundation:graph-bar" text="Sales" />
      <Link icon="la:cash-register" text="Payments" />
      <Link icon="bi:credit-card-2-front" text="Subscription" />
      <Link icon="carbon:settings" text="Settings" />
      <Link icon="carbon:help" text="Help" />
      <Link icon="gala:file-doc" text="Doc" />
    </div>
  );
};

export default DashLinks;
