import { Icon } from "@iconify/react";
import React from "react";
import { ErrorMessage, Field } from "formik";

interface Props {
  label: string;
  name: string;
  value: string | number;
  handleChange: any;
  errors: any;
  touched: any;
  handleBlur?: any;
  des?: string;
}

const FileInput: React.FC<Props> = ({
  name,
  value,
  handleChange,
  handleBlur,
  label,
  des,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name}>
        <h3 className={`text-sm lg:text-base text-grayOne`}>{label}</h3>
      </label>
      <div className="flex border px-4  md:px-[18px] justify-center rounded-[5px]  items-center space-x-3">
        <Field
          id={name}
          name={name}
          type="file"
          value={value}
          className="w-full py-[15px] text-sm relative custom-file-input outline-none text-grayOne "
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      {des && <h1 className="text-grayTwo text-[13px] md:text-sm">{des}</h1>}
    </div>
  );
};

export default FileInput;
