import bcrypt from "bcryptjs";
import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "../../../../utils/cookies";
import { client } from "../../../../utils/generated/client";
import { generateJWT } from "../../../../utils/auth/jwt";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
  try {
    console.log("Refresh token called with body:", req.body);
    // Get input from Hasura Action query variables payload
    const { refreshToken } = req.body.input.params;
    const data = await client.query({
      user: [
        {
          where: { refresh_token: { _eq: refreshToken } },
        },
        {
          id: true,
        },
      ],
    });

    const user = data.user[0];
    if (!user) return res.status(401).json({ message: "Invalid" });

    const token = generateJWT({
      defaultRole: "user",
      allowedRoles: ["user"],
      otherClaims: {
        "X-Hasura-User-Id": user.id.toString(),
      },
    });

    return res.json({ token });
  } catch (e) {
    console.log("Got error at /api/actions/refresh-token", e);
    return res.status(400).json({ code: e.name, message: e.message });
  }
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default handler;
