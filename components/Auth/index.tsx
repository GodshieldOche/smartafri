import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import logo from "../../public/main.png";
import mobile from "../../public/main2.png";

interface Props {
  children: React.ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="min-w-screen min-h-screen bg-white lg:py-10 flex md:justify-center md:items-center ">
      <div className="max-w-[686px] w-full  h-full md:bg-grayThree py-7 md:py-12 px-4 md:px-[80px] flex flex-col items-center space-y-8">
        <div className=" md:hidden w-full">
          <Icon
            onClick={() => router.back()}
            icon="ic:round-arrow-back-ios-new"
            className="!text-grayOne !text-xl !cursor-pointer"
          />
        </div>
        <div className="hidden md:block">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer"
            src={logo}
            alt="logo"
          />
        </div>
        <div className=" md:hidden">
          <Image
            onClick={() => router.push("/")}
            className="cursor-pointer"
            src={mobile}
            alt="logo"
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
