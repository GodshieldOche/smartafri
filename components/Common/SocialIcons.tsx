import React from "react";
import { Icon } from "@iconify/react";

interface Props {
  link: string;
  icon: string;
}

const SocialIcon: React.FC<Props> = ({ link, icon }) => {
  return (
    <div className="cursor-pointer">
      <Icon icon={icon} className="!text-primaryOne !text-lg" />
    </div>
  );
};

export default SocialIcon;
