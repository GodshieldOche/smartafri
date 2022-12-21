import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import React from "react";
import ProductCardTwo from "../../../Common/ProductCardTwo";
import DashHeader from "../DashHeader";
import { Box } from "../Home";

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const RounIcon = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/vendor/dashboard/products/add")}
      className="flex justify-center items-center p-[6px] rounded-full bg-primaryOne cursor-pointer "
    >
      <Icon icon="akar-icons:plus" className="!text-base !text-white" />
    </div>
  );
};

const VendorProducts = () => {
  return (
    <div className="w-full">
      <DashHeader page="Products" />
      <div className="vendor_starter">
        <div className="grid grid-cols-3 gap-3 lg:gap-y-0 lg:gap-x-5">
          <Box icon="fluent:form-new-48-regular" name="New Orders" value="50" />
          <Box
            icon="healthicons:rdt-result-out-stock-outline"
            name="Out of Stock"
            value="50"
          />
          <Box icon="bi:cart-plus" name="Newly Added" value="26" />
        </div>
        <div className="w-full space-y-8 pb-10">
          <div className="flex justify-between items-center">
            <h1 className="vendor_header">Items</h1>
            <RounIcon />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-2">
            {products.map((item, index) => (
              <div key={index} className="flex w-full justify-center">
                <ProductCardTwo />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorProducts;
