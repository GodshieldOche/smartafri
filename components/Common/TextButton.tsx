import { useRouter } from "next/router";
import React from "react";

interface Props {
  text: string;
}

const TextButton: React.FC<Props> = ({ text }) => {
  const router = useRouter();
  return (
    <div className="text-lg cursor-pointer " onClick={() => router.back()}>
      {text}
    </div>
  );
};

export default TextButton;
