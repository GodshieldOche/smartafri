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
  options: {
    value: string;
    name: string;
  }[];
}

const Dropdown: React.FC<Props> = ({
  label,
  name,
  value,
  options,
  handleChange,
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="space-y-2 relative w-full h-fit">
      <label htmlFor={name} className=" ">
        <h3 className={`${active ? "text-primaryOne" : "text-grayFour"}`}>
          {label}
        </h3>
      </label>
      <div className=" w-full h-full relative">
        <div
          className={`border ${
            active ? "!text-primaryOne !border-primaryOne/30" : "text-grayFour"
          } text-sm w-full py-3 pl-4 bg-white rounded-[7px] `}
          onClick={() => {
            setActive(!active);
          }}
          onBlur={(e) => {
            setActive(false);
          }}
        >
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

export default Dropdown;
