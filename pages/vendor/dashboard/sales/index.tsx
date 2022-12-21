import Head from "next/head";
import React from "react";
import VendorSales from "../../../../components/Vendor/Dashboard/Sales";

const VendorDashboardProductsPage = () => {
  return (
    <div>
      <Head>
        <title>SmartAfri Vendor | Sales</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VendorSales />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const jwt = context.req?.cookies?.smartToken;

  if (!jwt) {
    return {
      redirect: {
        destination: "/vendor/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default VendorDashboardProductsPage;
