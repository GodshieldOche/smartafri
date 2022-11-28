import React from "react";
import ButtonLoader from "./ButtonLoader";

interface Props {
  text: string;
  width?: string;
  color?: string;
  action?: any;
  loading?: boolean;
}

const Buttonv2: React.FC<Props> = ({ text, width, color, action, loading }) => {
  return (
    <button
      onClick={action}
      className={` lg:px-12 ${width ? width : "w-full lg:w-fit"}  py-3 ${
        color ? color : "bg-primaryOne"
      }  text-white text-lg  whitespace-nowrap rounded-[7px]`}
      type="button"
    >
      {loading ? <ButtonLoader /> : text}
    </button>
  );
};

export default Buttonv2;