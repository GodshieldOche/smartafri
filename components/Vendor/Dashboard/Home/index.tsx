import { Icon } from "@iconify/react";
import React from "react";
import Chart from "./Chart";

interface Props {
  icon: string;
  name: string;
  value: string;
}

export const Box: React.FC<Props> = ({ icon, name, value }) => {
  return (
    <div className="border rounded-[4px] w-full space-y-4 flex flex-col p-2 md:px-6 md:py-5 cursor-default ">
      <div className="p-1 w-fit bg-primaryOne/10">
        <Icon icon={icon} className="!text-primaryOne  !text-2xl" />
      </div>
      <h3 className="text-sm">{name}</h3>
      <h1 className="text-base text-primaryOne font-bold !mt-3 ">{value}</h1>
    </div>
  );
};

const VendorHome = () => {
  return (
    <div className="w-full h-full py-10 contain space-y-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-y-0 gap-x-5">
        <Box
          icon="la:money-bill-alt-solid"
          name="Balance"
          value="₦ 50,000,000"
        />
        <Box
          icon="fluent:clipboard-bullet-list-ltr-20-regular"
          name="Pending Balance"
          value="₦ 50,000,000"
        />
        <Box
          icon="ant-design:clock-circle-outlined"
          name="Awaiting Shipment"
          value="26"
        />
        <Box icon="carbon:send-alt" name="Shipped" value="234" />
      </div>
      <div className="w-full space-y-8 pb-10">
        <h1 className="vendor_header">Top regions with most sales</h1>
        <div
          style={{ boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.05)" }}
          className="w-full h-[400px] flex justify-center items-center py-4 lg:!p-8 rounded-[4px]"
        >
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default VendorHome;
