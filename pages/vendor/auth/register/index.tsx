import Head from "next/head";
import VendorAuthLayout from "../../../../components/Vendor/Auth";
import Register from "../../../../components/Vendor/Auth/Register";

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>SmartAfri Vendor | Register</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VendorAuthLayout>
        <Register />
      </VendorAuthLayout>
    </div>
  );
}
