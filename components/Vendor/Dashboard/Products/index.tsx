import React from "react";
import ProductCardTwo from "../../../Common/ProductCardTwo";
import { Box } from "../Home";

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const VendorProducts = () => {
  return (
    <div className="w-full h-full py-10  contain space-y-12">
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
        <h1 className="vendor_header">Items</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 gap-2">
          {products.map((item, index) => (
            <div key={index} className="flex w-full justify-center">
              <ProductCardTwo />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorProducts;
