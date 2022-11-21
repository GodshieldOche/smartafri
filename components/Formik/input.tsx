import React, { useState, useEffect } from "react";
import { ErrorMessage, Field } from "formik";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

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
}

const Input: React.FC<Props> = ({
  label,
  name,
  placeholder,
  errors,
  type,
  touched,
  value,
  handleChange,
  handleBlur,
}) => {
  const [inputType, setInputType] = useState<string>(type);
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setInputType(type);
    if (value) {
      setActive(true);
    }
  }, []);

  return (
    <div className="space-y-2">
      <label htmlFor={name}>
        <h3
          className={`${active ? "text-primaryOne" : "text-grayFour"}  ${
            errors && touched ? "!text-secondaryOne" : ""
          } text-sm`}
        >
          {label}
        </h3>
      </label>
      <div className="w-full h-full relative">
        <Field
          id={name}
          name={name}
          type={inputType}
          value={value}
          className={`input-field ${
            active ? "!text-primaryOne !border-primaryOne/30" : "text-grayFour"
          }  ${errors && touched ? "!border-secondaryOne" : ""} `}
          onChange={handleChange}
          autoComplete="off"
          placeholder={placeholder}
          onFocus={() => setActive(true)}
          onBlur={(e: React.FocusEvent) => {
            setActive(false);
            handleBlur(e);
          }}
        />
        {["password", "confirmPassword"].includes(name) && (
          <div className="absolute h-full top-0 bottom-0 right-4 flex flex-col justify-center">
            {inputType === "password" ? (
              <RiEyeFill
                onClick={() => setInputType("text")}
                className="!text-sm md:!text-base !text-primaryOne cursor-pointer"
              />
            ) : (
              <RiEyeOffFill
                onClick={() => setInputType("password")}
                className="!text-sm md:!text-base !text-grayOne cursor-pointer"
              />
            )}
          </div>
        )}
      </div>
      <ErrorMessage
        className="text-[10px] font-medium text-secondaryOne"
        name={name}
        component="div"
      />
    </div>
  );
};

export default Input;
