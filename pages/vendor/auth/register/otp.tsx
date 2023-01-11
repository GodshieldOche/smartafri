import Head from "next/head";
import VerifyOtp from "../../../../components/Vendor/Auth/Register/VerifyOtp";

export default function HomePage() {
  return (
    <div className="w-full">
      <Head>
        <title>SmartAfri Vendor | Verify OTP</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VerifyOtp />
    </div>
  );
}
