import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { destroyCookie } from "../../utils/cookies";
import { client } from "../../utils/generated/client";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
  destroyCookie(res, "hasura-user-token", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });
  res.status(200).json({ success: true });
});

export default handler;
