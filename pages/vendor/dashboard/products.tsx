import Head from "next/head";
import React from "react";
import VendorProducts from "../../../components/Vendor/Dashboard/Products";

const VendprDashboardProductsPage = () => {
  return (
    <div>
      <Head>
        <title>SmartAfri Vendor | Products</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VendorProducts />
    </div>
  );
};

export default VendprDashboardProductsPage;