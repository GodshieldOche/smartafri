import Head from "next/head";
import Checkout from "../../components/Checkout";
import Delivery from "../../components/Checkout/Delivery";

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>SmartAfri | Home</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Checkout>
        <Delivery />
      </Checkout>
    </div>
  );
}
