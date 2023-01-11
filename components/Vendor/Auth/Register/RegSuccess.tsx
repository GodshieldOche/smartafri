import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import success from "../../../../public/success.svg";
import Buttonv2 from "../../../Common/Butonv2";

const RegSuccess = () => {
  const router = useRouter();
  return (
    <div className="pb-20 !mt-3 lg:!mt-[48px]  flex-col space-y-12 lg:space-y-16">
      <div className="flex justify-center items-center">
        <div className="w-[200px] md:w-fit">
          <Image src={success} alt="Success" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="text-primaryOne text-lg md:text-xl font-semibold ">
          Account Created Successfully
        </h1>

        <p className="text-sm lg:text-base tracking-wide text-center text-black leading-6 lg:leading-8 xl:px-10 ">
          Your SmartAfri Business account has been created, Click button below
          to proceed
        </p>
      </div>

      <div className="w-full !mt-[100px]">
        <Buttonv2
          text="Proceed"
          width="w-full"
          action={() => router.push("/vendor/auth/register/success")}
        />
      </div>
    </div>
  );
};

export default RegSuccess;
