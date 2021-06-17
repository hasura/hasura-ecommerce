import * as React from "react";
import Head from "next/head";
import Link from "next/link";

import { useAtom, atom } from "jotai";

import { accountReducerAtom } from "../../../state/AccountState";

import LayoutStore from "../../../components/LayoutStore";

export default function Account({ isAuthed }) {
  const [account, dispatch] = useAtom(accountReducerAtom);

  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="content header pad-xl">
        <div className="container small">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <h2 className="mb-sm">My Account</h2>
              <div className="shadow card pad-sm">
                <p className="strong mb-xxs">Username</p>
                <input
                  className="w-100 mb-xs"
                  placeholder="Username..."
                  value={account.name}
                />
                <p className="strong mb-xxs">Email</p>
                <input
                  className="w-100 mb-sm"
                  placeholder="Username..."
                  value={account.email}
                />
                <hr className="mb-xs" />
                <p className="strong mb-xxs">Update Password</p>
                <input
                  type="password"
                  className="w-100 mb-xs"
                  placeholder="Password..."
                />
                <p className="strong mb-xxs">Repeat Password</p>
                <input
                  type="password"
                  className="w-100 mb-sm"
                  placeholder="Password..."
                />
                <hr className="mb-sm" />
                <hr className="mb-xs" />
                <Link href="/admin">
                  <a>Admin</a>
                </Link>
                <div className="right">
                  <button className="primary mb-xs">Update Account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const isAuthed = Object.keys(req.cookies).includes("hasura-user-token");

  return {
    props: { isAuthed },
  };
}

Account.Layout = LayoutStore({ sidebar: false });
