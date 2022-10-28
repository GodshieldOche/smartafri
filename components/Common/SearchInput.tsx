import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface Props {
  value: string | number;
  placeholder: string;
  type: string;
}

const SearchInput: React.FC<Props> = ({ placeholder, type, value }) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className={`input `}
        autoComplete="off"
        required
      />
      <div className="absolute h-full top-0 bottom-0 right-4 flex flex-col justify-center">
        <Icon icon="ant-design:search-outlined" className="!text-grayTwo" />
      </div>
    </div>
  );
};

export default SearchInput;
