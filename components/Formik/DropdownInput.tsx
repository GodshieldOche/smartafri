import { Icon } from "@iconify/react";
import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import DropOptions from "../Common/DropOptions";

interface Props {
  label: string;
  name: string;
  value: string;
  handleChange: any;
  errors: any;
  touched: any;
  options: {
    value: string;
    name: string;
  }[];
  icon?: string;
}

const DropdownInput: React.FC<Props> = ({
  label,
  name,
  errors,
  touched,
  value,
  options,
  handleChange,
  icon,
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className="space-y-2 relative w-full h-fit"
      onClick={() => {
        setActive(!active);
      }}
    >
      <label htmlFor={name} className=" ">
        <h3
          className={`${
            active ? "text-primaryOne" : "text-grayOne"
          } text-sm lg:text-base `}
        >
          {label}
        </h3>
      </label>
      <div className=" w-full h-full relative">
        <div className="w-full flex items-center py-[15px] px-4 space-x-3  md:px-[18px] border rounded-[5px] outline-none text-grayOne ">
          {icon && <Icon icon={icon} className="  !text-xl !text-grayOne " />}
          <h3 className="text-sm">{value}</h3>
        </div>
        <div className="absolute h-full top-0 bottom-0 my-auto right-3 flex flex-col justify-center">
          <Icon
            icon="dashicons:arrow-down-alt2"
            className="!text-grayOne !font-medium !text-base"
          />
        </div>
      </div>

      {active && (
        <DropOptions
          setActive={setActive}
          handleChange={handleChange}
          options={options}
        />
      )}
    </div>
  );
};

export default DropdownInput;
