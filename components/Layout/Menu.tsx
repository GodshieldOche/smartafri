import React from "react";

interface Props {
  menuState: boolean;
}

const Menu: React.FC<Props> = ({ menuState }) => {
  return (
    <div
      className={`${
        menuState ? " w-[100%] md:w-[40%] " : "w-0"
      } !shadow-2xl lg:hidden py-5 fixed transition-all duration-700 ease-in-out bg-grayThree h-screen top-0 left-0 !z-40 !overflow-x-hidden `}
    >
      <div className="flex flex-col w-full px-5">
        <div className="flex w-full justify-end"></div>
      </div>
    </div>
  );
};

export default Menu;
