import Head from "next/head";
import Dashboard from "../../components/Dashboard";

export default function ProfilePage() {
  return (
    <div>
      <Head>
        <title>SmartAfri | Dashboard</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard>
        <></>
      </Dashboard>
    </div>
  );
}
