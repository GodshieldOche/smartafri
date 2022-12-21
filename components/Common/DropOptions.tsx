import React from "react";

interface Props {
  options: {
    value: string;
    name: string;
  }[];
  handleChange: any;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropOptions: React.FC<Props> = ({ options, handleChange, setActive }) => {
  return (
    <div className="absolute top-20 left-0 right-0 z-40 rounded-md flex flex-col space-y-1 py-1  bg-white shadow-lg h-fit    ">
      {options.map((option, index) => (
        <div
          className=" w-full p-3 cursor-pointer hover:bg-primaryOne/10 !space-y-2 text-sm text-black/80"
          key={index}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleChange(option.value);
            setActive(false);
          }}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default DropOptions;
