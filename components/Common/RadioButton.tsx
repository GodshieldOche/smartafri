import React from "react";

interface Props {
  name: string;
  value: string;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const RadioButton: React.FC<Props> = ({
  name,
  value,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="flex items-center space-x-3">
      <input
        type="radio"
        name="age"
        className="h-[18px] w-[18px] accent-primaryOne "
        checked={selectedOption === value}
        onChange={() => setSelectedOption(value)}
        value={value}
      />
      <label
        htmlFor="age1"
        className={`text-base lg:text-lg  font-medium 
      ${selectedOption === value ? "text-primaryOne" : "text-grayOne"} `}
      >
        {name}
      </label>
    </div>
  );
};

export default RadioButton;
