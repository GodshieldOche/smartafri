import { useRouter } from "next/router";
import React from "react";

interface Props {
  text: string;
  action?: any;
}

const TextButton: React.FC<Props> = ({ text, action }) => {
  const router = useRouter();
  return (
    <div
      className="text-sm  lg:text-lg cursor-pointer "
      onClick={() => {
        action ? action() : router.back();
      }}
    >
      {text}
    </div>
  );
};

export default TextButton;
