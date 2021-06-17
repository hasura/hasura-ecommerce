import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import "../styles/card-section.module.css";
import { client } from "../utils/generated/client";

import { order_status_enum } from "../utils/generated/graphql-client-sdk";
import { useTypedMutation } from "../utils/gql-zeus-query-hooks";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
  return (
    <label>
      Card details
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </label>
  );
}

export function CheckoutForm({ cart, callback, orderInfo }) {
  const stripe = useStripe();
  const elements = useElements();

  const addressWithoutId = { ...orderInfo.addressState };
  delete addressWithoutId.id;

  const [createUserAddress, userAddress] = useTypedMutation({
    insert_address_one: [
      {
        object: {
          user_id: orderInfo.userState.id,
          ...addressWithoutId,
        },
      },
      {
        id: true,
      },
    ],
  });

  const [placeOrder, order] = useTypedMutation({
    insert_order_one: [
      {
        object: {
          status: order_status_enum.CREATED,
          billing_address_id: orderInfo.addressState.id,
          shipping_address_id: orderInfo.addressState.id,
          user_id: orderInfo.userState.id,
          products: {
            data: cart.map((item) => ({
              product_id: item.id,
              quantity: item.quantity,
            })),
          },
        },
      },
      {
        id: true,
      },
    ],
  });

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    if (!orderInfo.addressState.id) {
      const { data: createUserAddressMutation, errors: createAddressErrors } =
        await createUserAddress();

      if (createAddressErrors) {
        alert("Errors creating user address record in Hasura");
        createAddressErrors.forEach((it) => console.log(it.message));
      }

      // This is so bad, but it would take too long to refactor the hook to be parameterized. I'm awful.
      orderInfo.addressState.id =
        createUserAddressMutation.insert_address_one.id;
    }

    ////////////////////////////////////////////////////
    // ---> !!! DO NOT DO THIS IN AN ACTUAL APP !!! <---
    // What should be done, is that you should pass a product_id and quantity from the frontend
    // And then resolve those in your database to a dollar amount on the serverside
    // This is insecure and in theory prone to potential exploits by manipulation of the paymentAmount param
    // But, it's a demo ;^)
    const { createPaymentIntent } = await client.mutation({
      createPaymentIntent: [
        {
          params: {
            paymentAmount: cart.reduce(
              (acc, item) => item.price * item.quantity,
              0
            ),
          },
        },
        {
          clientSecret: true,
        },
      ],
    });

    const { data, errors } = await placeOrder();

    if (errors) {
      alert("Error submitting order to Hasura");
      errors.forEach((it) => console.log(it.message));
    }

    const result = await stripe.confirmCardPayment(
      createPaymentIntent.clientSecret,
      {
        payment_method: {
          card: elements.getElement(CardElement),
          metadata: {
            orderId: data.insert_order_one.id,
            userId: orderInfo.userState.id,
          },
          billing_details: {
            name: orderInfo.userState.name,
            address: {
              city: orderInfo.addressState.city,
              line1: orderInfo.addressState.address_line_one,
              line2: orderInfo.addressState.address_line_two,
              postal_code: orderInfo.addressState.zipcode,
            },
          },
        },
      }
    );

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === "succeeded") {
        result.paymentIntent.id;
        callback();
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button
        className="primary w-100"
        disabled={!stripe}
        style={{ marginTop: 20 }}
      >
        <ion-icon name="cart-outline" />
        Pay & Checkout
      </button>
    </form>
  );
}
