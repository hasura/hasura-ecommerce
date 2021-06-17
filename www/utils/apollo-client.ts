import { useMemo } from "react";

import decodeJWT from "jwt-decode";
import type { JwtPayload } from "jwt-decode";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  Operation,
} from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

import { TokenRefreshLink } from "apollo-link-token-refresh";

import { getHasuraURL } from "./constants";
import { client } from "./generated/client";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "./access-and-refresh-tokens";

let apolloClient;

const HASURA_URL = getHasuraURL();

const isServer = () => typeof window === "undefined";
export const isBrowser = () => !isServer();

function getHeaders() {
  const headers = {} as HeadersInit;
  const token = getAccessToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

function operationIsSubscription(operation: Operation): boolean {
  const definition = getMainDefinition(operation.query);
  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  );
}

function getApolloLink() {
  // LINKS
  const httpLink = new HttpLink({ uri: `${HASURA_URL}/v1/graphql` });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        ...getHeaders(),
      },
    }));
    return forward(operation);
  });

  const tokenRefreshLink = new TokenRefreshLink({
    // Indicates the current state of access token expiration
    // If token not yet expired or user doesn't have a token (guest) true should be returned
    isTokenValidOrUndefined: () => {
      const token = getAccessToken();
      if (!token) return true;

      const claims: JwtPayload = decodeJWT(token);
      const expirationTimeInSeconds = claims.exp * 1000;
      const now = new Date();
      const isExpired = expirationTimeInSeconds < now.getTime();

      return isExpired == false;
    },
    fetchAccessToken: () => {
      return client.query({
        refreshToken: [
          {
            params: {
              refreshToken: getRefreshToken(),
            },
          },
          {
            token: true,
          },
        ],
      }) as any;
    },
    handleFetch: (accessToken: string) => {
      const claims: JwtPayload = decodeJWT(accessToken);
      console.log("handleFetch", { accessToken, claims });
      setAccessToken(accessToken);
    },
    handleResponse: (operation, accessTokenField) => (response) => {
      // here you can parse response, handle errors, prepare returned token to
      // further operations
      // returned object should be like this:
      // {
      //    access_token: 'token string here'
      // }
      console.log("handleResponse operation", operation);
      console.log("handleResponse accessTokenField", accessTokenField);
      console.log("handleResponse operation", response);
      return { access_token: response.refreshToken.token };
    },
    handleError: (err) => {
      // full control over handling token fetch Error
      console.warn("Your refresh token is invalid. Try to reauthenticate.");
      console.error(err);
    },
  });

  const wsLink =
    isBrowser() &&
    new WebSocketLink({
      uri: `${HASURA_URL}/v1/graphql`
        .replace("http", "ws")
        .replace("https", "wss"),
      options: {
        reconnect: true,
        timeout: 30000,
        connectionParams: () => {
          return { headers: getHeaders() };
        },
      },
    });

  // RESULT
  if (isServer()) {
    return ApolloLink.from([authLink, httpLink]);
  }

  if (isBrowser()) {
    return ApolloLink.from([
      tokenRefreshLink,
      authLink,
      ApolloLink.split(operationIsSubscription, wsLink, httpLink),
    ]);
  }
}

///////////////////////////////////////////////////

const createApolloClient = () =>
  new ApolloClient({
    link: getApolloLink(),
    ssrMode: isServer(), // set to true for SSR
    cache: new InMemoryCache(),
  });

export function initializeApollo(initialState = null) {
  const _apolloClient: ApolloClient<NormalizedCacheObject> =
    apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
