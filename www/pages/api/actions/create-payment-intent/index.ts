import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

import { client } from "../../../../utils/generated/client";
import { stripe } from "../../../../utils/stripe-client-serverside";

const handler = nc<NextApiRequest, NextApiResponse>();

////////////////////////////////////////////////////
// ---> !!! DO NOT DO THIS IN AN ACTUAL APP !!! <---
// What should be done, is that you should pass a product_id and quantity from the frontend
// And then resolve those in your database to a dollar amount on the serverside
// This is insecure and in theory prone to potential exploits by manipulation of the paymentAmount param
// But, it's a demo ;^)
handler.post(async (req, res) => {
  try {
    const { paymentAmount } = req.body.input.params;
    const paymentIntent = await stripe.paymentIntents.create({
      // Stripe needs the number as integer, so 29.99 becomes 2999 for example
      amount: parseInt((paymentAmount * 100).toFixed(0)),
      currency: "usd",
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (e) {
    console.log("Error:", e);
    res.status(400).json({ code: e.name, message: e.message });
  }
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default handler;
