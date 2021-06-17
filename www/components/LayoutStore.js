import { Fragment } from "react";

import Cart from "./Cart";
import Header from "./Header";
import Sidebar from "./Sidebar";

const LayoutStore = ({ sidebar = true }) => ({ children }) => {
  return (
    <Fragment>
      <Cart />
      <Header />
      {sidebar && <Sidebar />}
      {children}
    </Fragment>
  );
};

export default LayoutStore;
