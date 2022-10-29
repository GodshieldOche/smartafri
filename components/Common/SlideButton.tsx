import { Icon } from "@iconify/react";
import React from "react";

interface Props {
  icon: string;
}

const SlideButton: React.FC<Props> = ({ icon }) => {
  return (
    <div className="p-1 bg-primaryOne rounded-full cursor-pointer">
      <Icon icon={icon} className="!text-3xl !text-white" />
    </div>
  );
};

export default SlideButton;
