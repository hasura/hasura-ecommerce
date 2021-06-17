import { Fragment } from "react";
import { useAtom } from "jotai";
import Link from "next/link";

import QuantitySelect from "./QuantitySelect";

import { cartIsOpen, cart } from "../state/CartState";

const Cart = () => {
  const [cartOpen, setCartOpen] = useAtom(cartIsOpen);
  const [cartState, setCartState] = useAtom(cart);

  const updateCart = (id, index) => (value) => {
    const product = cartState.find((prod) => prod.id === id);
    const updatedProduct = { ...product };
    updatedProduct.quantity = value;
    const updatedCart = [...cartState];
    updatedCart[index] = updatedProduct;
    setCartState(updatedCart);
  };

  return (
    <Fragment>
      <div
        id="sidebar-cart"
        className={`shadow-lg pad-sm ${cartOpen ? "active" : ""}`}
      >
        <h3 className="mb-sm">Your Cart Items:</h3>
        {cartState.map((item, index) => {
          return (
            <div className="flex" key={index}>
              <div className="center mr-xs">
                <img style={{ maxWidth: 56 }} src={item.image} />
              </div>
              <div className="flex-grow">
                <p className="sm mb-xxs">{item.name}</p>
                <div className="dropdown mr-xs">
                  <QuantitySelect
                    selected={item.quantity}
                    onChange={updateCart(item.id, index)}
                  >
                    {[1, 2, 3, 4]}
                  </QuantitySelect>
                </div>

                <button
                  className="btn-reset"
                  href="#!"
                  onClick={() =>
                    setCartState((state) =>
                      state.filter((cartItem) => cartItem.id !== item.id)
                    )
                  }
                >
                  <span className="sm muted">
                    <ion-icon name="close-circle-outline" /> Remove
                  </span>
                </button>
              </div>
            </div>
          );
        })}
        <hr className="mb-sm pt-sm" />
        <Link href="/checkout">
          <button className="primary w-100">Checkout</button>
        </Link>
      </div>
      <div
        onClick={() => setCartOpen(false)}
        id="sidebar-cart-bg"
        className={`${cartOpen ? "active" : ""}`}
      />
    </Fragment>
  );
};

export default Cart;
