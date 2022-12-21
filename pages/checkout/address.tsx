import Head from "next/head";
import Checkout from "../../components/Checkout";
import Address from "../../components/Checkout/Address";

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>SmartAfri | Home</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Checkout>
        <Address />
      </Checkout>
    </div>
  );
}
