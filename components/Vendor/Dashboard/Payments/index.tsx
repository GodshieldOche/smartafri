import Link from "next/link";
import React from "react";
import SearchInput from "../../../Common/SearchInput";
import DashHeader from "../DashHeader";
import { Box } from "../Home";

const Card: React.FC<{ paid: boolean }> = ({ paid }) => {
  return (
    <Link
      href={"/vendor/dashboard/payments/1"}
      className="flex justify-between items-center p-4 border rounded-[4px] border-black/10  "
    >
      <div className="flex flex-col space-y-2 ">
        <h1 className="text-xs text-grayOne">1234566</h1>
        <h1 className="text-sm text-primaryOne font-semibold">
          Louis Vuitton Sh.....
        </h1>
      </div>
      {paid ? (
        <h1 className="text-sm text-[#63C092] font-medium">Received</h1>
      ) : (
        <h1 className="text-sm text-[#EB6C63] font-medium">Pending</h1>
      )}
    </Link>
  );
};

const VendorPayments = () => {
  return (
    <div className="w-full">
      <DashHeader page="Sales" />
      <div className="vendor_starter">
        <div className="grid grid-cols-2 gap-3 lg:gap-y-0 lg:gap-x-5">
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
        </div>
        <div className="w-full space-y-8 pb-10">
          <div className="flex justify-between items-center">
            <h1 className="vendor_header">Payments</h1>
            <div className="flex w-[302px]">
              <SearchInput placeholder="Search here" type="text" value={""} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Card paid={true} />
            <Card paid={false} />
            <Card paid={true} />
            <Card paid={true} />
            <Card paid={false} />
            <Card paid={true} />
            <Card paid={false} />
            <Card paid={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPayments;
