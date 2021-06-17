import * as React from "react";
import Head from "next/head";
import LayoutAdmin from "../../components/LayoutAdmin";

import AdminNewOrders from "../../components/AdminNewOrders";
import AdminNewCustomers from "../../components/AdminNewCustomers";
import AdminStoreSummary from "../../components/AdminStoreSummary";

const AdminSummary = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="content pad-xl">
        <div className="container">
          <AdminStoreSummary />
          <AdminNewOrders />
          <AdminNewCustomers />
        </div>
      </section>
    </React.Fragment>
  );
};

AdminSummary.Layout = LayoutAdmin;

export default AdminSummary;
