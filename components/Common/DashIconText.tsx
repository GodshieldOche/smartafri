import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

interface Props {
  icon: string;
  text: string;
  active: string;
  link: string;
}

const DashIconText: React.FC<Props> = ({ text, icon, active, link }) => {
  return (
    <Link
      href={`/dashboard/${link}`}
      className="flex items-center cursor-pointer flex-row space-x-4"
    >
      <div className="relative">
        <Icon
          icon={icon}
          className={` ${
            active === text.toLowerCase()
              ? "!text-primaryOne"
              : "text-primaryOne lg:!text-grayFour"
          }   !text-[22px]`}
        />
      </div>
      <h2
        className={` ${
          active === text.toLowerCase()
            ? "!text-primaryOne"
            : "text-primaryOne lg:!text-grayFour"
        } text-base font-medium whitespace-nowrap `}
      >
        {text}
      </h2>
    </Link>
  );
};

export default DashIconText;
