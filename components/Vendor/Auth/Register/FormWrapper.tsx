import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import Basic from "./Basic";
import Contact from "./Contact";
import Profile from "./Profile";

const progressText = [`Basic`, ` Contact`, `Profile`];

const FormWrapper = () => {
  const [page, setPage] = useState<number>(0);
  const [individualData, setIndividualData] = useState<{
    name: string;
    email: string;
    phone_no: string;
    password: string;
    full_name: string;
    account_type: string;
    state: string;
    country: string;
    description: string;
  }>({
    name: "Uniccon",
    email: "",
    phone_no: "",
    full_name: "",
    password: "123",
    country: "Nigeria",
    state: "FCT",
    account_type: "individual",
    description: "individual",
  });

  // Progress bar steps
  const progress = useRef<HTMLDivElement>(null);
  const steps = progress.current?.querySelectorAll(".progress-step");

  const slider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (page !== 4 && slider.current && steps) {
      slider.current.style.width = `${(page / (steps.length - 1)) * 100}%`;
    }
  }, [page, slider.current, steps]);

  // scroll top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const formDisplay = () => {
    if (page === 0) {
      return (
        <Basic
          // type={type}
          setData={setIndividualData}
          data={individualData}
          setPage={setPage}
          scrollToTop={scrollToTop}
        />
      );
    } else if (page === 1) {
      return (
        <Contact
          setData={setIndividualData}
          data={individualData}
          setPage={setPage}
          scrollToTop={scrollToTop}
        />
      );
    } else {
      return (
        <Profile
          setData={setIndividualData}
          data={individualData}
          setPage={setPage}
          scrollToTop={scrollToTop}
        />
      );
    }
  };

  return (
    <div className="w-full space-y-8">
      <div className="w-full space-y-2">
        <h1 className="vendorHeading  ">Hello There</h1>
        <h2 className="text-sm lg:text-base ">
          Get Started with your SmartAfri Account
        </h2>
      </div>
      <div className="w-full px-2 md:px-[60px]">
        <div ref={progress} className="progress-bar !overflow-hidden">
          <div
            ref={slider}
            className="block absolute top-[50%] h-[2px] bg-primaryOne z-30 "
          ></div>
          {[1, 2, 3].map((item, index) => (
            <div
              key={item}
              className={`progress-step w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-full flex justify-center items-center
              ${
                index === page || index < page
                  ? "bg-primaryOne"
                  : "bg-[#CFD4D9]"
              }  z-40`}
            >
              {index < page ? (
                <Icon
                  className="!text-white !text-2xl"
                  icon="material-symbols:check-small-rounded"
                />
              ) : (
                <h1 className="text-xs md:text-lg text-white font-medium ">
                  {item}
                </h1>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between md:px-[50px] !mt-3 items-center">
        {progressText.map((item, index) => (
          <h1
            className={` ${
              index === page || index < page
                ? "text-primaryOne"
                : "text-grayOne"
            } text-[10px]  md:text-[13px] text-center`}
            key={index}
          >
            {item}
            <br />
            Information
          </h1>
        ))}
      </div>

      {formDisplay()}
    </div>
  );
};

export default FormWrapper;
