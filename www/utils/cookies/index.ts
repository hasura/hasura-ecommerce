import { serialize } from "cookie";
import type { CookieSerializeOptions } from "cookie";

import type { NextApiResponse } from "next";

/**
 * This sets `cookie` using the `res` object
 */
export const setCookie = (
  res: NextApiResponse,
  name: string,
  value: unknown,
  options: CookieSerializeOptions = {}
) => {
  const stringValue =
    typeof value === "object" ? "j:" + JSON.stringify(value) : String(value);

  if ("maxAge" in options) {
    // options.expires = new Date(Date.now() + options.maxAge);
    options.maxAge /= 1000;
  }

  res.setHeader("Set-Cookie", serialize(name, String(stringValue), options));
};

/**
 * Destroys a cookie with a particular name.
 */
export function destroyCookie(
  res: NextApiResponse,
  name: string,
  options?: CookieSerializeOptions
) {
  /**
   * We forward the request destroy to setCookie function
   * as it is the same function with modified maxAge value.
   */
  return setCookie(res, name, "", { ...(options || {}), maxAge: -1 });
}
