import { Icon } from "@iconify/react";
import { current } from "@reduxjs/toolkit";
import React from "react";
import Button from "../../../Common/Button";
import DashHeader from "../DashHeader";

const subscriptions = [
  {
    type: "Premium",
    price: "$ 200",
    features: [
      {
        name: "30 Products",
        checked: true,
      },
      {
        name: "Advanced Reporting",
        checked: true,
      },
      {
        name: "3 Featured Listing",
        checked: true,
      },
      {
        name: "Forecast",
        checked: true,
      },
      {
        name: "Promo",
        checked: true,
      },
    ],
    current: true,
  },
  {
    type: "Standard",
    price: "$ 35",
    features: [
      {
        name: "10 Products",
        checked: true,
      },
      {
        name: "Detailed Reporting",
        checked: true,
      },
      {
        name: "1 Featured Listing",
        checked: false,
      },
      {
        name: "Forecast",
        checked: false,
      },
      {
        name: "Promo",
        checked: false,
      },
    ],
    current: false,
  },
  {
    type: "Basic",
    price: "Free",
    features: [
      {
        name: "5 Products",
        checked: true,
      },
      {
        name: "Basic Reporting",
        checked: true,
      },
      {
        name: "Featured Listing",
        checked: false,
      },
      {
        name: "Forecast",
        checked: false,
      },
      {
        name: "Promo",
        checked: false,
      },
    ],
    current: false,
  },
];

const SubBox: React.FC<{
  type: string;
  price: string;
  features: { name: string; checked: boolean }[];
  current: boolean;
}> = ({ current, features, price, type }) => {
  return (
    <div className="rounded-[10px] flex flex-col space-y-5 border border-[#4082E6] p-3 ">
      {/* Type */}
      <div className="flex h-7 items-center justify-between">
        <h1 className="text-sm font-semibold ">{type}</h1>
        {current && (
          <div className="px-5 py-[6px] rounded-[4px] text-xs text-semibold text-white bg-primaryFour ">
            Current Plan
          </div>
        )}
      </div>
      {/* Price */}
      <div className="flex w-full">
        <h1 className="font-bold text-xl text-primaryOne ">
          {price}
          {price !== "Free" && (
            <span className="text-grayOne text-sm font-medium ">{` / Month`}</span>
          )}
        </h1>
      </div>
      <div className="flex flex-col space-y-4">
        {features.map(({ checked, name }, index) => (
          <div key={index} className="flex items-center space-x-3 ">
            {checked && (
              <Icon
                icon="akar-icons:circle-check-fill"
                className="!text-primaryFour  !text-base"
              />
            )}
            {!checked && (
              <Icon
                icon="ic:round-cancel"
                className="!text-[#EB6C63] !text-base"
              />
            )}

            <h1 className="text-sm font-medium">{name}</h1>
          </div>
        ))}
      </div>
      <Button
        text={` ${current ? "Cancel Subscription" : "Choose Plan"}`}
        width="w-full"
      />
    </div>
  );
};

const VendorSubScription = () => {
  return (
    <div className="w-full">
      <DashHeader page="Subscription" />
      <div className="vendor_starter">
        <div className="grid grid-cols-3 gap-3 lg:gap-y-0 lg:gap-x-5">
          {subscriptions.map((item, index) => (
            <SubBox
              key={index}
              current={item.current}
              features={item.features}
              price={item.price}
              type={item.type}
            />
          ))}
        </div>
        <div className="w-full space-y-8 pb-10">
          <div className="flex justify-between items-center">
            <h1 className="vendor_header">Subscription History</h1>
          </div>
          {/* <div className="grid grid-cols-2 gap-5">
            <Card paid={true} />
            <Card paid={false} />
            <Card paid={true} />
            <Card paid={true} />
            <Card paid={false} />
            <Card paid={true} />
            <Card paid={false} />
            <Card paid={true} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default VendorSubScription;
