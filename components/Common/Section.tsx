import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  pos?: string;
  text: string;
  title: string;
  icon: string;
}

const Section: React.FC<Props> = ({ pos, text, title, icon }) => {
  return (
    <div className={`${pos ? pos : "items-center"} w-full flex flex-col `}>
      <div className="max-w-[197px]  space-y-4 lg:space-y-5">
        <div className="w-full flex justify-center">
          <Icon
            icon={icon}
            className="!text-primaryOne text-2xl lg:!text-4xl"
          />
        </div>
        <h1 className="text-center text-sm lg:text-lg font-[700] text-primaryOne ">
          {title}
        </h1>
        <h2 className="text-center leading-[28px] lg:leading-[32px] text-[13px] lg:text-base text-grayOne ">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default Section;
