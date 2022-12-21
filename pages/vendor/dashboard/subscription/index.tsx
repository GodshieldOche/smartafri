import Head from "next/head";
import React from "react";
import VendorSubScription from "../../../../components/Vendor/Dashboard/Subscription";

const VendorDasboardSubscriptionPage = () => {
  return (
    <div>
      <Head>
        <title>SmartAfri Vendor | Subscription</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VendorSubScription />
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

export default VendorDasboardSubscriptionPage;
