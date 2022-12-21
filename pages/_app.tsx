import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { wrapper } from "../redux/store";
import { Provider } from "react-redux";
import absoluteUrl from "next-absolute-url";
import App from "next/app";
import { clearToken } from "../helper";

export default function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Layout currentUser={props.pageProps.currentUser}>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: any) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const jwt = appContext?.ctx?.req?.cookies?.smartToken || null;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwt}`,
  };

  const requestOptions = {
    method: "GET",
    headers,
  };

  // console.log(appContext);
  const pathname: string = appContext.ctx.pathname;
  const { origin } = absoluteUrl(appContext.ctx.req);

  let user = null;

  console.log(origin);

  if (jwt) {
    const res = await fetch(
      `https://apis.smartafri.com/api/web/auth-user`,
      requestOptions
    );
    user = await res.json();
  }

  if (pathname.includes("vendor") && !user?.account_type) {
    await clearToken(appContext);
    user = null;
  }

  if (!pathname.includes("vendor") && user?.account_type) {
    await clearToken(appContext);
    user = null;
  }

  console.log(user);
  console.log(jwt);
  return {
    pageProps: {
      ...appProps.pageProps,
      currentUser: user,
    },
  };
};
