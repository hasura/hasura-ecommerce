// This endpoint based on: https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe
import nc from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../../utils/stripe-client-serverside";
import type Stripe from "stripe";
import { buffer } from "micro";
import { client } from "../../../utils/generated/client";
import { order_status_enum } from "../../../utils/generated/graphql-client-sdk";

const webhookSecret: string = process.env.STRIPE_WEBHOOK_SECRET!;

// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc<NextApiRequest, NextApiResponse>();
handler.post(async (req, res) => {
  const payload = String(await buffer(req));
  const signature = req.headers["stripe-signature"]!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.log(`❌ Error message: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log("✅ Successful Stripe webhook event:", event.id);

  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(`💰 PaymentIntent status: ${paymentIntent.status}`);
      handleUpdateOrderPaymentStatus(paymentIntent);
      break;
    }

    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log(
        `❌ PaymentIntent failed: ${paymentIntent.last_payment_error?.message}`
      );
      break;
    }

    default: {
      console.warn(`🤷‍♀️ Unhandled Stripe webhook event type: ${event.type}`);
      break;
    }
  }

  return res.json({ received: true });
});

function handleUpdateOrderPaymentStatus(paymentIntent: Stripe.PaymentIntent) {
  const orderId = paymentIntent.metadata.orderId;

  if (!orderId) {
    console.log(
      "❌ No orderId found for successful payment, can't update status"
    );
    return;
  }

  client.mutation({
    update_order_by_pk: [
      {
        pk_columns: { id: Number(orderId) },
        _set: {
          status: order_status_enum.PAID,
        },
      },
      {
        id: true,
      },
    ],
  });
}

export default handler;
