import Head from "next/head";
import AuthLayout from "../../components/Auth";
import Register from "../../components/Auth/Register";

export default function RegisterPage() {
  return (
    <div className="">
      <Head>
        <title>SmartAfri | Register</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthLayout>
        <Register />
      </AuthLayout>
    </div>
  );
}
