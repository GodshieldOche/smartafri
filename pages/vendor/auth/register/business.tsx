import Head from "next/head";
import BusinessFormWrapper from "../../../../components/Vendor/Auth/Register/BusinessFormWrapper";

export default function HomePage() {
  return (
    <div className="w-full">
      <Head>
        <title>SmartAfri Vendor | Register</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BusinessFormWrapper />
    </div>
  );
}
