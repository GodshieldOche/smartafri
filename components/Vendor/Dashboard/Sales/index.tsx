import Link from "next/link";
import React from "react";
import SearchInput from "../../../Common/SearchInput";
import DashHeader from "../DashHeader";
import { Box } from "../Home";

const Card: React.FC<{}> = () => {
  return (
    <Link
      href={"/vendor/dashboard/sales/1"}
      className="flex justify-between items-center p-4 border rounded-[4px] border-black/10  "
    >
      <div className="flex flex-col space-y-2 ">
        <h1 className="text-xs text-grayOne">1234566</h1>
        <h1 className="text-sm text-primaryOne font-semibold">
          Louis Vuitton Sh.....
        </h1>
      </div>
      <h1 className="text-sm font-semibold">₦ 10,000</h1>
    </Link>
  );
};

const VendorSales = () => {
  return (
    <div className="w-full">
      <DashHeader page="Payments" />
      <div className="vendor_starter">
        <div className="grid grid-cols-4 gap-3 lg:gap-y-0 lg:gap-x-5">
          <Box
            icon="ant-design:clock-circle-outlined"
            name="Awaiting Shipment"
            value="26"
          />
          <Box icon="carbon:send-alt" name="Shipped" value="234" />
          <Box icon="bi:cart" name="Carts" value="26" />
          <Box icon="fluent:form-new-48-regular" name="New Orders" value="50" />
        </div>
        <div className="w-full space-y-8 pb-10">
          <div className="flex justify-between items-center">
            <h1 className="vendor_header">Sold Items</h1>
            <div className="flex w-[302px]">
              <SearchInput placeholder="Search here" type="text" value={""} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorSales;
