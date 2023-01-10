import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { ErrorMessage, Field } from "formik";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

interface Props {
  label: string;
  name: string;
  value: string | number;
  placeholder: string;
  handleChange: any;
  errors: any;
  touched: any;
  handleBlur?: any;
}

const TextAreaInput: React.FC<Props> = ({
  name,
  value,
  handleChange,
  handleBlur,
  placeholder,
  label,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name}>
        <h3 className={`text-sm lg:text-base text-grayOne`}>{label}</h3>
      </label>
      <div className="flex relative border pl-[18px] justify-center rounded-[5px]  items-center space-x-3">
        <Field
          id={name}
          name={name}
          as="textarea"
          value={value}
          className="w-full text-sm autofill:bg-white py-[18px] outline-none text-grayOne"
          onChange={handleChange}
          autoComplete="off"
          aria-autocomplete="none"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextAreaInput;
