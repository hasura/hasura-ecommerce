import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";

import LayoutStore from "../components/LayoutStore";

import { useTypedMutation, useTypedQuery } from "../utils/gql-zeus-query-hooks";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "../components/StripeCheckoutForm";

import { cart } from "../state/CartState";
import { useAtom } from "jotai";
import { makeStateHandler } from "../utils/react-make-state-handler";
import { order_status_enum } from "../utils/generated/graphql-client-sdk";

const stripePromise = loadStripe(
  "pk_test_51IIhH9GbZfxamgsrex6AgIC034djKLeG06RDoOM3jfoy2Hz8OJzTXuymI2LQ3aRmxFy4QGmjWX51zClO48pdrtxD00wHGBuj5M"
);

function CartList({ cart }) {
  const CartItems = () =>
    cart.map((it) => (
      <tr>
        <td style={{ width: 1 }}>
          <img style={{ width: 64 }} src={it.image} />
        </td>
        <td>
          <p className="">{it.name}</p>
          <p className="strong">
            {it.quantity} x ${it.price.toFixed(2)}
          </p>
        </td>
      </tr>
    ));

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const Total = () => (
    <tr>
      <td colSpan={3} className="right">
        <h3 className="">
          <span style={{ fontWeight: 400 }}>Subtotal:</span> $
          {subtotal.toFixed(2)}
        </h3>
      </td>
    </tr>
  );

  return (
    <div className="col-5 pl-xs">
      <div className="shadow card mb-md pad-sm">
        <table className="iso wrap">
          <tbody>
            <CartItems />
            <Total />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const [userState, setUserState, makeUserStateHandler] = makeStateHandler({
    id: null,
    name: "",
  });

  const [addressState, setAddressState, makeAddressStateHandler] =
    makeStateHandler({
      id: null,
      city: "",
      state: "",
      zipcode: "",
      address_line_one: "",
      address_line_two: "",
    });

  const [cartState, _setCartState] = useAtom(cart);

  const [placeOrder, order] = useTypedMutation({
    insert_order_one: [
      {
        object: {
          status: order_status_enum.CREATED,
          billing_address_id: addressState.id,
          shipping_address_id: addressState.id,
          user_id: userState.id,
          products: {
            data: cartState.map((c) => ({
              product_id: c.id,
              quantity: c.quantity,
            })),
          },
        },
      },
      {
        id: true,
      },
    ],
  });

  const { data, loading, error } = useTypedQuery(
    {
      user: [
        {},
        {
          id: true,
          name: true,
          addresses: [
            { limit: 1 },
            {
              id: true,
              address_line_one: true,
              address_line_two: true,
              city: true,
              state: true,
              zipcode: true,
            },
          ],
        },
      ],
    },
    {
      onCompleted: (data) => {
        const user = data.user[0];
        const address = user.addresses[0];
        if (user) setUserState(user);
        if (address) setAddressState(address);
      },
    }
  );

  return (
    <section className="content sidebar header pad-xl">
      <div className="container small">
        <h2 className="mb-sm">Checkout</h2>
        <div className="row">
          <div className="col-7 pr-sm">
            {!order.called && (
              <div className="shadow card pad-sm mb-sm">
                <p className="strong mb-xxs">Name</p>
                <input
                  className="w-100 mb-xs"
                  placeholder="Name..."
                  value={userState.name}
                  onChange={makeUserStateHandler("name")}
                />

                <div className="row">
                  <div className="col-6 pr-xxs">
                    <p className="strong mb-xxs">State</p>
                    <input
                      className="w-100 mb-xs"
                      placeholder="State..."
                      value={addressState.state}
                      onChange={makeAddressStateHandler("state")}
                    />
                  </div>
                  <div className="col-6 pl-xxs">
                    <p className="strong mb-xxs">City</p>
                    <input
                      className=" w-100 mb-xs"
                      placeholder="City..."
                      value={addressState.city}
                      onChange={makeAddressStateHandler("city")}
                    />
                  </div>
                </div>

                <p className="strong mb-xxs">Postal Code</p>
                <input
                  className="w-100 mb-xs"
                  placeholder="Name..."
                  value={addressState.zipcode}
                  onChange={makeAddressStateHandler("zipcode")}
                />

                <p className="strong mb-xxs">Address 1</p>
                <input
                  className="w-100 mb-xs"
                  placeholder="Name..."
                  value={addressState.address_line_one}
                  onChange={makeAddressStateHandler("address_line_one")}
                />

                <p className="strong mb-xxs">Address 2</p>
                <input
                  className="w-100 mb-sm"
                  placeholder="Name..."
                  value={addressState.address_line_two}
                  onChange={makeAddressStateHandler("address_line_two")}
                />

                <hr className="mb-xs" style={{ marginBottom: 20 }} />

                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    cart={cartState}
                    callback={() => {
                      /* Do stuff here with successful order placed */
                      alert("Successfully placed Stripe order!");
                    }}
                    orderInfo={{
                      userState,
                      addressState,
                    }}
                  />
                </Elements>
              </div>
            )}
            {order.called && order.loading && (
              <div className="shadow card pad-sm mb-sm">
                <p>Loading</p>
              </div>
            )}
            {order.called && order.loading && (
              <div className="shadow card pad-sm mb-sm">
                <p>Thank you!</p>
              </div>
            )}
          </div>

          <CartList cart={cartState} />
        </div>
      </div>
    </section>
  );
}

CheckoutPage.Layout = LayoutStore({ sidebar: false });
