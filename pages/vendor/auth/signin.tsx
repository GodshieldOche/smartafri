import Head from "next/head";
import Login from "../../../components/Vendor/Auth/Login";

export default function SignInPage() {
  return (
    <div className="w-full">
      <Head>
        <title>SmartAfri Vendor | Register</title>
        <meta name="description" content="SmartAfri by Uniccon Group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const jwt = context.req?.cookies?.smartToken;

  if (jwt) {
    return {
      redirect: {
        destination: "/vendor/dashboard/home",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
