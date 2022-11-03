import Head from "next/head";
import Categories from "../components/Categories";

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>SmartAfri | Categories</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Categories />
    </div>
  );
}
