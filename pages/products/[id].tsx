import Head from "next/head";
import Product from "../../components/Product";

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>SmartAfri | Product Details</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Product />
    </div>
  );
}
