import Head from "next/head";
import AuthLayout from "../../components/Auth";
import SignIn from "../../components/Auth/SignIn";

export default function SiginInPage() {
  return (
    <div className="">
      <Head>
        <title>SmartAfri | SiginIn</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout>
        <SignIn />
      </AuthLayout>
    </div>
  );
}
