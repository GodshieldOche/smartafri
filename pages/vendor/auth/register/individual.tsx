import Head from "next/head";
import FormWrapper from "../../../../components/Vendor/Auth/Register/FormWrapper";

export default function HomePage() {
  return (
    <div className="w-full">
      <Head>
        <title>SmartAfri Vendor | Register</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FormWrapper />
    </div>
  );
}
