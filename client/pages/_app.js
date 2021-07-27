import { useEffect } from "react";
import { Provider } from "react-redux";
import Head from "next/head";
import { useRouter } from "next/router";

import "../styles.scss";
import store from "../store";
import { loadUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken";

import Layout from "../component/layout/layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (typeof window !== "undefined") {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    useEffect(() => {
      store.dispatch(loadUser());
    }, []);
  }

  return (
    <Provider store={store}>
      <Head>
        <title>{`Mazz Kitchen - Solution Digitales`}</title>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <script
          src='https://kit.fontawesome.com/556a7dddee.js'
          crossOrigin='anonymous'
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
