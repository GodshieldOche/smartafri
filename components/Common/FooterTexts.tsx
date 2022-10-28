import React from "react";

interface Props {
  title: string;
  options: any[];
}

const FooterTexts: React.FC<Props> = ({ title, options }) => {
  return (
    <>
      <h1 className="text-primaryOne font-[700] text-base lg:text-lg  ">
        {title}
      </h1>
      <div className="flex flex-col space-y-3 lg:space-y-4">
        {options.map((item, index) => (
          <h2 key={index} className="secondaryThree ">
            {item}
          </h2>
        ))}
      </div>
    </>
  );
};

export default FooterTexts;
