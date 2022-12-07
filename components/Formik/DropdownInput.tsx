import { Icon } from "@iconify/react";
import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

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
    <div className="space-y-2 w-full h-fit">
      <label htmlFor={name} className=" ">
        <h3 className={`text-grayOne`}>{label}</h3>
      </label>
      <div className=" w-full h-full flex relative border px-[18px] justify-center rounded-[5px]  items-center space-x-3">
        {icon && <Icon icon={icon} className="!text-2xl !text-grayOne " />}
        <Field
          id={name}
          name={name}
          className={`w-full py-[18px] outline-none text-grayOne`}
          as="select"
          value={value}
          onChange={handleChange}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
        >
          {options.map((option, index) => (
            <option className="!space-y-2" key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </Field>
        <div className="absolute h-full top-0 bottom-0 my-auto right-3 flex flex-col justify-center">
          <Icon
            icon="dashicons:arrow-down-alt2"
            className="!text-grayOne !font-medium !text-base"
          />
        </div>
      </div>

      <ErrorMessage
        className="text-xs font-medium !text-red-400"
        name={name}
        component="div"
      />
    </div>
  );
};

export default DropdownInput;
