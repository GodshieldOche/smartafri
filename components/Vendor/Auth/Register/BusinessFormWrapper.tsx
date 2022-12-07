import { Icon } from "@iconify/react";
import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import useAppDispatch from "../../../../hooks/useDispatch";
import VendorInput from "../../../Formik/VendorInput";
import Basic from "./Basic";
import Contact from "./Contact";
import Other from "./Other";
import Profile from "./Profile";

const progressText = [`Basic`, ` Contact`, `Profile`, `Other`];

const BusinessFormWrapper = () => {
  const [page, setPage] = useState<number>(0);
  const [type, setType] = useState<string>("");

  const dispatch = useAppDispatch();

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

  // Routing
  const router: NextRouter = useRouter();

  useEffect(() => {
    if (router.pathname === "/vendor/auth/register/company") {
      setType("company");
    } else {
      setType("individual");
    }
  }, [router.pathname]);

  const formDisplay = () => {
    if (page === 0) {
      return (
        <Basic
          business={true}
          // setData={setData}
          // data={data}
          // setCorporate={setCorporate}
          // corporate={corporate}
          setPage={setPage}
          scrollToTop={scrollToTop}
        />
      );
    } else if (page === 1) {
      return (
        <Contact business={true} setPage={setPage} scrollToTop={scrollToTop} />
      );
    } else if (page === 2) {
      return (
        <Profile business={true} setPage={setPage} scrollToTop={scrollToTop} />
      );
    } else {
      return (
        <Other business={true} setPage={setPage} scrollToTop={scrollToTop} />
      );
    }
  };

  return (
    <div className="w-full space-y-8">
      <div className="w-full space-y-2">
        <h1 className="headingOne !text-primaryOne  ">Hello There</h1>
        <h2 className="text-base ">Get Started with your SmartAfri Account</h2>
      </div>
      <div className="w-full px-[50px]">
        <div ref={progress} className="progress-bar !overflow-hidden">
          <div
            ref={slider}
            className="block absolute top-[50%] h-[2px] bg-primaryOne z-30 "
          ></div>
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={item}
              className={`progress-step w-[45px] h-[45px] rounded-full flex justify-center items-center
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
                <h1 className="text-base text-white font-semibold ">{item}</h1>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between px-[36px] !mt-3 items-center">
        {progressText.map((item, index) => (
          <h1
            className={` ${
              index === page || index < page
                ? "text-primaryOne"
                : "text-grayOne"
            }  text-[13px] text-center`}
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

export default BusinessFormWrapper;
