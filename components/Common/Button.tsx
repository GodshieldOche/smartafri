import React from "react";

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <button
      className="px-10 py-2 bg-primaryOne text-white text-sm  whitespace-nowrap rounded-[7px]"
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
