import { Icon } from "@iconify/react";
import React from "react";
import { ErrorMessage, Field } from "formik";

interface Props {
  label: string;
  name: string;
  value: string | number;
  placeholder: string;
  type: string;
  handleChange: any;
  errors: any;
  touched: any;
  handleBlur?: any;
  icon: string;
}

const VendorInput: React.FC<Props> = ({
  name,
  value,
  handleChange,
  handleBlur,
  placeholder,
  label,
  icon,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name}>
        <h3 className={` text-grayOne`}>{label}</h3>
      </label>
      <div className="flex border px-[18px] justify-center rounded-[5px]  items-center space-x-3">
        <Icon icon={icon} className="!text-2xl !text-grayOne " />
        <Field
          id={name}
          name={name}
          type="text"
          value={value}
          className="w-full py-[18px] outline-none text-grayOne"
          onChange={handleChange}
          autoComplete="off"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default VendorInput;
