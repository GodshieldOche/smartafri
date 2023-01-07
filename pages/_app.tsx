import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { wrapper } from "../redux/store";
import { Provider } from "react-redux";
import App from "next/app";
import { clearToken } from "../helper";
import NextNprogress from "nextjs-progressbar";
import axios from "axios";

export default function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Layout currentUser={props?.pageProps?.currentUser}>
        <NextNprogress color="#4082E6" />
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const jwt = appContext?.ctx?.req?.cookies?.smartToken || null;

  const pathname: string = appContext.ctx.pathname;

  let user = null;

  if (jwt) {
    try {
      const { data } = await axios.get(
        `https://apis.smartafri.com/api/web/auth-user`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      user = data;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  if (pathname.includes("vendor") && !user?.account_type) {
    await clearToken(appContext);
    user = null;
  }

  if (!pathname.includes("vendor") && user?.account_type) {
    await clearToken(appContext);
    user = null;
  }

  return {
    pageProps: {
      ...appProps.pageProps,
      currentUser: user,
    },
  };
};
