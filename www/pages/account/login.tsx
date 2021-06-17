import * as React from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { useAtom, atom } from "jotai";

import { accountReducerAtom } from "../../state/AccountState";

import LayoutStore from "../../components/LayoutStore";
import FormLogin from "../../components/FormLogin";
import { openclient } from "../../utils/generated/client";

import { actions } from "../../state/AccountState";

const { LOGGING_IN, LOGGED_IN } = actions;

export default function Login({ isAuthed }) {
  const [account, dispatch] = useAtom(accountReducerAtom);
  const router = useRouter();

  React.useEffect(() => {
    if (account.loggedIn) {
      router.push("/");
    }
  }, [account.loggedIn]);

  const submitForm = async (user) => {
    try {
      dispatch({ type: LOGGING_IN });
      const { email, password } = user;

      const response = await openclient.mutation({
        login: [
          {
            params: {
              email,
              password,
            },
          },
          {
            name: true,
            email: true,
            token: true,
            refreshToken: true,
          },
        ],
      });

      if (response.errors) {
        console.log(response.errors);
      } else {
        dispatch({ type: LOGGED_IN, value: response.login });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="content header pad-xl">
        {!isAuthed && (
          <FormLogin handleSubmit={submitForm} loading={account.authing} />
        )}
        {isAuthed && <p>Good to go, bro</p>}
      </section>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  const { req } = context;
  const isAuthed = Object.keys(req.cookies).includes("hasura-user-token");

  if (isAuthed) {
    return {
      redirect: {
        destination: "/",
        statusCode: 302,
      },
    };
  }

  return {
    props: { isAuthed },
  };
}

Login.Layout = LayoutStore({ sidebar: false });
