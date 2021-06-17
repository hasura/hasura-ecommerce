import * as React from "react";

import { useRouter } from "next/router";
import Head from "next/head";

import { useAtom, atom } from "jotai";

import { accountReducerAtom } from "../../state/AccountState";

import LayoutStore from "../../components/LayoutStore";
import FormSignup from "../../components/FormSignup";
import { openclient } from "../../utils/generated/client";

import { actions } from "../../state/AccountState";
import { $, useTypedMutation } from "../../utils/gql-zeus-query-hooks";

const { SIGNING_UP, SIGNED_UP } = actions;

export default function Signup({ isAuthed, isForAdmin = false }) {
  const [account, dispatch] = useAtom(accountReducerAtom);
  const router = useRouter();

  const [signupMutation, { data, loading, error }] = useTypedMutation({
    signup: [
      {
        params: {
          email: $`email`,
          password: $`password`,
          name: $`name`,
        },
      },
      {
        token: true,
        refreshToken: true,
      },
    ],
  });

  React.useEffect(() => {
    if (account.loggedIn) {
      router.push("/");
    }
  }, [account.loggedIn]);

  const submitForm = async (user) => {
    try {
      dispatch({ type: SIGNING_UP });
      const { name, email, password } = user;

      const response = await signupMutation({
        variables: {
          name,
          email,
          password,
        },
      });

      if (response.errors) {
        console.log(response.errors);
      } else {
        dispatch({ type: SIGNED_UP, value: response.data.signup });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="content header pad-xl">
        {!isAuthed && (
          <FormSignup handleSubmit={submitForm} loading={account.authing} />
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

Signup.Layout = LayoutStore({ sidebar: false });
