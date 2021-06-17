import { Fragment } from "react";
import Head from "next/head";
import { Provider } from "jotai";

import "../styles/core.css";
import "../styles/style.css";

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../utils/apollo-client";

import { store } from "../store";
import { StoreProvider } from "easy-peasy";

function MyApp({ Component, pageProps }) {
  const client = useApollo(pageProps.initialApolloState);

  const Layout = Component.Layout
    ? Component.Layout
    : ({ children }) => <Fragment>{children}</Fragment>;

  return (
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
        <Provider>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
              rel="stylesheet"
            />
            <script
              type="module"
              src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.esm.js"
            />
            <script
              noModule={false}
              src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.js"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </StoreProvider>
    </ApolloProvider>
  );
}

export default MyApp;
