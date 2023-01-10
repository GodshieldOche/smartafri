import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
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
  icon?: string;
}

const VendorInput: React.FC<Props> = ({
  name,
  value,
  handleChange,
  handleBlur,
  placeholder,
  label,
  icon,
  type,
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
          className={`${
            active ? "text-primaryOne" : "text-grayFour"
          } text-sm lg:text-base`}
        >
          {label}
        </h3>
      </label>
      <div
        className={`flex relative border px-4  md:px-[18px] justify-center rounded-[5px]   items-center space-x-3 
      ${active ? "!text-primaryOne !border-primaryOne/30" : "!text-grayOne"}`}
      >
        {icon && <Icon icon={icon} className="!text-xl " />}
        <Field
          id={name}
          name={name}
          type={inputType}
          value={value}
          className={`w-full text-sm autofill:bg-white py-[15px] outline-none   `}
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
    </div>
  );
};

export default VendorInput;
