import Head from "next/head";
import React from "react";
import Details from "../../../../components/Vendor/Dashboard/Payments/Details";

const VendprDashboardProductsPage = () => {
  return (
    <div>
      <Head>
        <title>SmartAfri Vendor | Payments</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Details />
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

export default VendprDashboardProductsPage;
