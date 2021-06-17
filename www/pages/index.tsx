import Head from "next/head";
import * as React from "react";
import AllOffers from "../components/AllOffers";
import LayoutStore from "../components/LayoutStore";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="content header sidebar pad-xl">
        <AllOffers />
      </section>
    </React.Fragment>
  );
}

Home.Layout = LayoutStore({ sidebar: true });
