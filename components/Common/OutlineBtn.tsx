import React from "react";
import ButtonLoader from "./ButtonLoader";

interface Props {
  text: string;
  width?: string;
  color?: string;
  action?: any;
  loading?: boolean;
}

const OutlineBtn: React.FC<Props> = ({
  text,
  width,
  color,
  action,
  loading,
}) => {
  return (
    <button
      onClick={action}
      className={` lg:px-12 ${width ? width : "w-full lg:w-fit"}  py-[10px] ${
        color ? color : "border-2 border-primaryOne"
      }  text-primaryOne text-base  whitespace-nowrap rounded-[7px]`}
      type="button"
    >
      {loading ? <ButtonLoader /> : text}
    </button>
  );
};

export default OutlineBtn;
