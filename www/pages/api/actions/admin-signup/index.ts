import bcrypt from "bcryptjs";
import nc from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

import { v4 as uuid } from "uuid";

import { client } from "../../../../utils/generated/client";
import { generateJWT } from "../../../../utils/auth/jwt";

const handler = nc<NextApiRequest, NextApiResponse>();

// WARNING: This should be disabled, just for ease-of-use during development and testing
handler.post(async (req, res) => {
  try {
    const { name, email, password } = req.body.input.params;

    const data = await client.mutation({
      insert_site_admin_one: [
        {
          object: {
            name,
            email,
            refresh_token: uuid(),
            password: await bcrypt.hash(password, 10),
          },
        },
        {
          id: true,
          name: true,
          email: true,
          refresh_token: true,
        },
      ],
    });

    const user = data.insert_site_admin_one;
    if (!user) return res.status(400).json({ message: "Something went wrong" });

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
  } catch (e) {
    console.log("ADMIN SIGNUP ERROR:", e);
    return res.status(400).json({ code: e.name, message: e.message });
  }
});

export default handler;
