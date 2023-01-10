import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Buttonv2 from "../../../Common/Butonv2";
import OutlineBtn from "../../../Common/OutlineBtn";
import RadioButton from "../../../Common/RadioButton";
import TextButton from "../../../Common/TextButton";

const Register = () => {
  const [selectedOption, setSelectedOption] = useState("individual");
  const router: NextRouter = useRouter();

  return (
    <div className="w-full space-y-16 pb-16">
      <div className="w-full space-y-2">
        <h1 className="vendorHeading ">Hello There</h1>
        <h2 className="text-sm lg:text-base ">
          Get Started with your SmartAfri Account
        </h2>
      </div>
      <form className="flex items-center space-x-20">
        <RadioButton
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          name="Individual"
          value="individual"
        />
        <RadioButton
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          name="Business"
          value="business"
        />
      </form>
      <div className="hidden w-full !mt-16 md:flex justify-between items-center space-x-6">
        <OutlineBtn
          text="Go Back"
          width="w-full"
          action={() => router.back()}
        />
        <Buttonv2
          text="Next"
          width="w-full"
          action={() => router.push(`/vendor/auth/register/${selectedOption}`)}
        />
      </div>
      <div className="md:hidden w-full">
        <Buttonv2
          text="Next"
          width="w-full"
          action={() => router.push(`/vendor/auth/register/${selectedOption}`)}
        />
        <div className="w-full flex justify-center items-center !mt-6">
          <TextButton text="Go Back" />
        </div>
      </div>
    </div>
  );
};

export default Register;
