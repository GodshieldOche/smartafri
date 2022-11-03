import Head from "next/head";
import Brands from "../../components/Brands";

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>SmartAfri | Brands</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Brands />
    </div>
  );
}
