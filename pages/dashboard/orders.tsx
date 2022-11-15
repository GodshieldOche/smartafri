import Head from "next/head";
import Dashboard from "../../components/Dashboard";
import Orders from "../../components/Dashboard/Orders";

export default function ProfilePage() {
  return (
    <div>
      <Head>
        <title>SmartAfri | Orders</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard>
        <Orders />
      </Dashboard>
    </div>
  );
}
