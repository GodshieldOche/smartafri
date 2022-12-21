import React from "react";
import ButtonLoader from "./ButtonLoader";

interface Props {
  text: string;
  width?: string;
  color?: string;
  action?: any;
  loading?: boolean;
}

const OutlineTwo: React.FC<Props> = ({
  text,
  width,
  color,
  action,
  loading,
}) => {
  return (
    <button
      onClick={action}
      className={` lg:px-12 border text-primaryOne ${
        width ? width : "w-full lg:w-fit"
      }  py-[15px] lg:py-[12px] ${
        color ? color : "border-primaryOne"
      } text-sm  whitespace-nowrap rounded-[7px]`}
      type="button"
    >
      {loading ? <ButtonLoader /> : text}
    </button>
  );
};

export default OutlineTwo;
