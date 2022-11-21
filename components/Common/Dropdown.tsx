import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  text: string;
  color: string;
}

const Dropdown: React.FC<Props> = ({ text, color }) => {
  return (
    <div className="flex items-center space-x-3 cursor-pointer ">
      <h2 className={` ${color} text-xs  lg:text-sm`}>{text}</h2>
      <Icon
        icon="bi:chevron-down"
        className={` ${color} !text-xs !font-semibold`}
      />
    </div>
  );
};

export default Dropdown;
