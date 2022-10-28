import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  text: string;
}

const Dropdown: React.FC<Props> = ({ text }) => {
  return (
    <div className="flex items-center space-x-3 ">
      <h2 className="text-white text-sm">{text}</h2>
      <Icon
        icon="bi:chevron-down"
        className="!text-white !text-xs !font-semibold"
      />
    </div>
  );
};

export default Dropdown;
