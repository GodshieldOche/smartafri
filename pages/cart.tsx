import Head from "next/head";
import Cart from "../components/Cart";

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>SmartAfri | Home</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cart />
    </div>
  );
}
