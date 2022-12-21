import Head from "next/head";
import React from "react";
import Add from "../../../../components/Vendor/Dashboard/Products/Add";

const VendprDashboardProductsPage = () => {
  return (
    <div>
      <Head>
        <title>SmartAfri Vendor | Products</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Add />
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
