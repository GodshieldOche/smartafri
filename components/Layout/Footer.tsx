import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import FooterTexts from "../Common/FooterTexts";
import SocialIcon from "../Common/SocialIcons";

const socials = [
  { icon: "brandico:facebook", link: "" },
  { icon: "teenyicons:instagram-solid", link: "" },
  { icon: "akar-icons:twitter-fill", link: "" },
  { icon: "bi:youtube", link: "" },
];

const Footer = () => {
  return (
    <div className="w-full bg-grayThree">
      <div className="contain pt-12 pb-[34px]">
        <div className="grid grid-cols-12 items-start gap-y-10 lg:gap-10 mb-[36px] lg:mb-[102px]">
          {/* first column */}
          <div className="col-span-12 lg:col-span-3 justify-start space-y-6">
            <div>
              <Image src={logo} alt="logo" />
            </div>
            <div className="w-full pr-[65px] lg:pr-[60px]">
              <h2 className="text-sm text-grayOne leading-7">
                SMARTAfri is an e-market platform that leverages modern
                technologies to harmonize a market for Africa
              </h2>
            </div>
          </div>
          {/* Second Column */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 justify-start space-y-[14px]">
            <FooterTexts
              title="Service"
              options={["Contact us", "Shipping", "Track orders"]}
            />
          </div>
          {/* Third Column */}
          <div className="col-span-6 sm:col-span-4 lg:col-span-2 justify-start space-y-[14px]">
            <FooterTexts
              title="Company"
              options={["About us", "Privacy Policy", "Terms and Conditions"]}
            />
          </div>
          {/* Fourth Column */}
          <div className="col-span-12 sm:col-span-4 lg:col-span-2 justify-start space-y-[14px]">
            <FooterTexts
              title="Information"
              options={["What's New", "Recently Viewed"]}
            />
          </div>
          {/* Fifth Column */}
          <div className="col-span-12 lg:col-span-3 justify-center lg:justify-end space-x-10 flex items-center mt-5 lg:mt-[2px] ">
            {socials.map((item, index) => (
              <SocialIcon link={item.link} icon={item.icon} key={index} />
            ))}
          </div>
        </div>
        <div className="relative !w-full flex items-center justify-center">
          <h2 className="text-secondaryThree text-xs lg:text-sm">
            © 2022 SmartAfri. All rights reserved.{" "}
          </h2>
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full hidden lg:flex items-center justify-start">
            <h2 className="text-black text-xs lg:text-sm">
              * All prices excl. VAT, plus shipping
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
