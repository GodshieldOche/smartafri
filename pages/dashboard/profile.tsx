import Head from "next/head";
import Dashboard from "../../components/Dashboard";
import Profile from "../../components/Dashboard/Profile";

export default function ProfilePage() {
  return (
    <div>
      <Head>
        <title>SmartAfri | Profile</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard>
        <Profile />
      </Dashboard>
    </div>
  );
}
