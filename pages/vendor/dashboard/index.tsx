import Head from "next/head";
import React from "react";
import VendorHome from "../../../components/Vendor/Dashboard/Home";

const VendorDashboardPage = () => {
  return (
    <div>
      <Head>
        <title>SmartAfri Vendor | Home</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VendorHome />
    </div>
  );
};

export default VendorDashboardPage;
