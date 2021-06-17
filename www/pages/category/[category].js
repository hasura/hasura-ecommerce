import * as React from "react";

import { Fragment } from "react";
import Head from "next/head";
import { useAtom } from "jotai";
import LayoutStore from "../../components/LayoutStore";
import AllOffers from "../../components/AllOffers";

import { selectedCategory } from "../../state/FilterState";

export default function Category({ category }) {
  const [, setCategory] = useAtom(selectedCategory);
  React.useEffect(() => {
    setCategory(category);
  }, [category]);

  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="content header sidebar pad-xl">
        <AllOffers category={category} />
      </section>
    </Fragment>
  );
}

export function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  return {
    props: {
      category,
    },
  };
}

Category.Layout = LayoutStore({ sidebar: true });
