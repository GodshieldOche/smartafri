import { useRouter } from "next/router";
import React from "react";
import Buttonv2 from "../../../Common/Butonv2";
import Otp from "../../../Common/Otp";

const VerifyOtp = () => {
  const [otp, setOtp] = React.useState("");
  const onChange = (value: string) => setOtp(value);
  const router = useRouter();
  return (
    <div className="pb-16 !mt-3 lg:!mt-[48px] flex-col space-y-12 lg:space-y-16">
      <Otp value={otp} valueLength={6} onChange={onChange} />
      <div className="flex flex-col justify-center items-center space-y-2 ">
        <h1 className="text-center font-semibold text-lg md:text-xl text-primaryOne ">
          Enter OTP
        </h1>
        <p className=" text-sm lg:text-base tracking-wide text-center text-black leading-6 lg:leading-8  ">
          Please enter the five digit token code that was sent to your mail
        </p>
      </div>
      <div className="w-full !mt-[100px]">
        <Buttonv2
          text="Verify"
          width="w-full"
          action={() => router.push("/vendor/auth/register/success")}
        />
      </div>
    </div>
  );
};

export default VerifyOtp;
