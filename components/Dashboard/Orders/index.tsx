import React from "react";
import Dropdown from "../../Common/Dropdown";
import OrderCard from "../../Common/OrderCard";

const Orders = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="dash-header">Orders (123)</h1>
        <Dropdown text="Open orders" color="text-grayOne" />
      </div>
      <div className="flex flex-col space-y-6">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  );
};

export default Orders;
