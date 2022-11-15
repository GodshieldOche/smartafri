import React from "react";

interface Props {
  text: string;
  width?: string;
  color?: string;
}

const Button: React.FC<Props> = ({ text, width, color }) => {
  return (
    <button
      className={` lg:px-12 ${
        width ? width : "w-full lg:w-fit"
      }  py-[15px] lg:py-[12px] ${
        color ? color : "bg-primaryOne"
      }  text-white text-sm  whitespace-nowrap rounded-[7px]`}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
