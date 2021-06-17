import router from "next/router";
import { Fragment, useEffect } from "react";
import { useStoreState } from "../store";
import HeaderAdmin from "./HeaderAdmin";

const LayoutAdmin = ({ children }) => {
  const token = useStoreState((store) => store.parsedJwtToken);

  // useEffect only fires on the client, equivalent to wrapping inside of "if typeof window !== undefined"
  // We can't access router.push() on the Server in Next.js, which is why we have to wrap this
  useEffect(() => {
    if (!token) router.push("/");
    else {
      const claims = token["https://hasura.io/jwt/claims"];
      if (!claims["x-hasura-allowed-roles"].includes("site-admin")) {
        router.push("/");
      }
    }
  });

  // On the server, make sure not to spit out any HTML at all for un-auth'ed people to peek at
  if (!token) return null;

  return (
    <Fragment>
      <HeaderAdmin />
      {children}
    </Fragment>
  );
};

export default LayoutAdmin;
