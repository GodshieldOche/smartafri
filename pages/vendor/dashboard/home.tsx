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

export async function getServerSideProps(context: any) {
  setTimeout(() => {
    const jwt = context.req?.cookies?.smartToken;

    if (!jwt) {
      return {
        redirect: {
          destination: "/vendor/auth/signin",
          permanent: false,
        },
      };
    }
  }, 1000);

  return {
    props: {},
  };
}

export default VendorDashboardPage;
