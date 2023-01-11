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
  errors,
  touched,
}) => {
  const [active, setActive] = useState<boolean>(false);
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
        className={` flex relative border pl-[18px] justify-center rounded-[5px]  items-center space-x-3
         ${
           active ? "!text-primaryOne !border-primaryOne/30" : "!text-grayOne"
         }  ${
          errors && touched
            ? "!border-secondaryOne/50 !text-secondaryOne placeholder:!text-secondaryOne"
            : ""
        }  `}
      >
        <Field
          id={name}
          name={name}
          as="textarea"
          value={value}
          className={` w-full text-sm autofill:bg-white py-[18px] outline-none  ${
            errors && touched ? " placeholder:!text-secondaryOne" : ""
          } `}
          onChange={handleChange}
          autoComplete="off"
          aria-autocomplete="none"
          placeholder={placeholder}
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
    </div>
  );
};

export default TextAreaInput;
