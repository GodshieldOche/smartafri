import React from "react";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button
      className="lg:px-12 w-full lg:w-fit py-[11px] bg-primaryOne text-white text-sm  whitespace-nowrap rounded-[7px]"
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
