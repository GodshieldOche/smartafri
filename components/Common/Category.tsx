import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  icon: string;
  text: string;
}

const Category: React.FC<Props> = ({ icon, text }) => {
  return (
    <div className="bg-primaryTwo/20 rounded-full p-1 lg:p-2 w-[199px] flex items-center space-x-3 cursor-pointer">
      <div className="p-2 bg-white rounded-full">
        <Icon
          icon={icon}
          className="!text-primaryTwo !text-lg lg:!text-xl xl:!text-2xl"
        />
      </div>
      <h2 className="text-xs lg:text-sm xl:text-base font-medium text-primaryTwo !mr-5">
        {text}
      </h2>
    </div>
  );
};

export default Category;
