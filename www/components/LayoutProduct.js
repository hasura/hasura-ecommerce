import { Fragment } from "react";

import Cart from "./Cart";
import Header from "./Header";

const LayoutProduct = ({ children }) => {
  return (
    <Fragment>
      <Cart />
      <Header />
      {children}
    </Fragment>
  );
};

export default LayoutProduct;
