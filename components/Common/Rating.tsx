import { Icon } from "@iconify/react";
import React from "react";

const Rating = () => {
  return (
    <div className="flex items-center space-x-1">
      <Icon
        icon="radix-icons:star-filled"
        className="!text-sm lg:!text-xl  !text-primaryThree"
      />
      <Icon
        icon="radix-icons:star-filled"
        className="!text-sm lg:!text-xl  !text-primaryThree"
      />
      <Icon
        icon="radix-icons:star-filled"
        className="!text-sm lg:!text-xl  !text-primaryThree"
      />
      <Icon
        icon="radix-icons:star-filled"
        className="!text-sm lg:!text-xl  !text-grayTwo"
      />
      <Icon
        icon="radix-icons:star-filled"
        className="!text-sm lg:!text-xl  !text-grayTwo"
      />
      <span className="text-[11px] lg:text-xs text-grayOne !ml-2">8,345</span>
    </div>
  );
};

export default Rating;
