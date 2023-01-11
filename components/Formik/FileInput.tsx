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
  errors,
  touched,
}) => {
  const [active, setActive] = React.useState<boolean>(false);
  return (
    <div className="space-y-2">
      <label htmlFor={name}>
        <h3
          className={`text-sm lg:text-base ${
            active ? "text-primaryOne" : "text-grayFour"
          } ${errors && touched ? "!text-secondaryOne" : ""}`}
        >
          {label}
        </h3>
      </label>
      <div
        className={` flex border px-4  md:px-[18px] justify-center rounded-[5px]  items-center space-x-3
         ${
           active ? "!text-primaryOne !border-primaryOne/30" : "!text-grayOne"
         }  ${
          errors && touched ? "!border-secondaryOne/50 !text-secondaryOne" : ""
        } `}
      >
        <Field
          id={name}
          name={name}
          type="file"
          value={value}
          aria-autocomplete="none"
          className={
            "w-full py-[12.5px] text-xs  md:text-sm relative custom-file-input outline-none "
          }
          onChange={handleChange}
          autoComplete="off"
          onFocus={() => setActive(true)}
          onBlur={(e: React.FocusEvent) => {
            setActive(false);
            handleBlur(e);
          }}
        />
      </div>
      <ErrorMessage
        className="text-xs !mt-2 font-medium text-secondaryOne"
        name={name}
        component="div"
      />
      {des && <h1 className="text-grayTwo text-[13px] md:text-sm">{des}</h1>}
    </div>
  );
};

export default FileInput;
