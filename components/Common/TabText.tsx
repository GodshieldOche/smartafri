import React from "react";

interface Props {
  text: string;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const TabText: React.FC<Props> = ({ text, active, setActive }) => {
  return (
    <div
      onClick={() => setActive(text)}
      className=" relative w-full flex items-center justify-center cursor-pointer py-3 lg:py-6"
    >
      <h1
        className={` ${
          active === text ? "text-primaryOne" : "text-grayOne"
        } relative text-sm lg:text-base  font-medium capitalize cursor-pointer `}
      >
        {text}
        {text === "reviews" && (
          <div className="absolute hidden -top-[2px] -right-11 py-[0.5px] px-2 rounded-full bg-primaryOne border-2 border-white p-1  lg:flex items-center justify-center">
            <h1 className="text-[11px] text-white font-medium">157</h1>
          </div>
        )}
      </h1>
      {active === text && (
        <div className="absolute -bottom-0.5 right-0 left-0 bg-primaryOne/60 h-[2px]"></div>
      )}
    </div>
  );
};

export default TabText;
