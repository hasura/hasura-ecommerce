import bcrypt from "bcryptjs";
import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

import { client } from "../../../../utils/generated/client";
import { generateJWT } from "../../../../utils/auth/jwt";

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
  // Get input from Hasura Action query variables payload
  const { email, password } = req.body.input.params;

  const data = await client.query({
    site_admin: [
      {
        where: { email: { _eq: email } },
      },
      {
        id: true,
        name: true,
        email: true,
        password: true,
        refresh_token: true,
      },
    ],
  });

  const user = data.site_admin[0];
  if (!user) return res.status(401).json({ message: "Invalid" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).send({ message: "Invalid" });

  const token = generateJWT({
    defaultRole: "site-admin",
    allowedRoles: ["site-admin", "user"],
    otherClaims: {
      "X-Hasura-Site-Admin-Id": user.id.toString(),
    },
  });

  return res.json({
    token,
    name: user.name,
    email: user.email,
    refreshToken: user.refresh_token,
  });
});

export const config = {
  api: {
    bodyParser: true,
  },
};

export default handler;
