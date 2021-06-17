import { action, thunk, computed } from "easy-peasy";
import type { Action, Thunk, Computed } from "easy-peasy";

import jwtDecode from "jwt-decode";

import type * as Schema from "../utils/generated/graphql-client-sdk";

import { initializeApollo } from "../utils/apollo-client";

import {
  useTypedClientMutation,
  useTypedClientQuery,
} from "../utils/gql-zeus-query-hooks";

const apollo = initializeApollo();

/**
 * =====================
 *  STORE TYPES
 * =====================
 */

type Maybe<T> = T | null;

export interface Store {
  // STATE
  user: Maybe<Partial<Schema.user>>;
  adminUser: Maybe<Partial<Schema.site_admin>>;
  auth: {
    accessToken: Maybe<string>;
    refreshToken: Maybe<string>;
  };

  // ACTIONS
  setUser: Action<Store, Partial<Schema.user>>;
  setAdminUser: Action<Store, Partial<Schema.site_admin>>;
  setAccessToken: Action<Store, string>;
  setRefreshToken: Action<Store, string>;

  // COMPUTED
  parsedJwtToken: Computed<Store, Record<string, string | string[]>>;

  // THUNKS
  signup: Thunk<Store, Schema.SignupInput>;
  login: Thunk<Store, Schema.LoginInput>;
  adminSignup: Thunk<Store, Schema.AdminSignupInput>;
  adminLogin: Thunk<Store, Schema.AdminLoginInput>;
  fetchAndSetUser: Thunk<Store>;
  logout: Thunk<Store>;
  adminLogout: Thunk<Store>;
}

/**
 * =====================
 *  STORE MODEL
 * =====================
 */

const model: Store = {
  // STATE
  user: null,
  adminUser: null,
  auth: {
    accessToken: null,
    refreshToken: null,
  },

  // COMPUTED
  parsedJwtToken: computed((store) => {
    if (!store.auth?.accessToken) return null;
    try {
      return jwtDecode(store.auth.accessToken);
    } catch (e) {
      return null;
    }
  }),

  // ACTIONS
  setUser: action((store, payload) => {
    store.user = payload;
  }),
  setAdminUser: action((store, payload) => {
    store.adminUser = payload;
  }),
  setAccessToken: action((store, payload) => {
    store.auth.accessToken = payload;
  }),
  setRefreshToken: action((store, payload) => {
    store.auth.refreshToken = payload;
  }),

  // THUNKS
  signup: thunk(async (store, payload) => {
    const result = await useTypedClientMutation(apollo, {
      signup: [
        { params: payload },
        {
          name: true,
          email: true,
          token: true,
          refreshToken: true,
        },
      ],
    });
    if (result.errors) throw new Error(JSON.stringify(result.errors));
    store.setRefreshToken(result.data.signup.refreshToken);
    store.setAccessToken(result.data.signup.token);
    store.fetchAndSetUser();
  }),

  login: thunk(async (store, payload) => {
    const result = await useTypedClientMutation(apollo, {
      login: [
        { params: payload },
        {
          name: true,
          email: true,
          token: true,
          refreshToken: true,
        },
      ],
    });
    if (result.errors) throw new Error(JSON.stringify(result.errors));
    store.setRefreshToken(result.data.login.refreshToken);
    store.setAccessToken(result.data.login.token);
    store.fetchAndSetUser();
  }),

  adminLogin: thunk(async (store, payload) => {
    const result = await useTypedClientQuery(apollo, {
      adminLogin: [
        { params: payload },
        {
          name: true,
          email: true,
          token: true,
          refreshToken: true,
        },
      ],
    });
    if (result.errors) throw new Error(JSON.stringify(result.errors));
    store.setRefreshToken(result.data.adminLogin.refreshToken);
    store.setAccessToken(result.data.adminLogin.token);
  }),

  adminSignup: thunk(async (store, payload) => {
    const result = await useTypedClientMutation(apollo, {
      adminSignup: [
        { params: payload },
        {
          name: true,
          email: true,
          token: true,
          refreshToken: true,
        },
      ],
    });
    if (result.errors) throw new Error(JSON.stringify(result.errors));
    store.setRefreshToken(result.data.adminSignup.refreshToken);
    store.setAccessToken(result.data.adminSignup.token);
  }),

  fetchAndSetUser: thunk(async (store) => {
    // Users are restricted to only being able to view their own profile
    // This should only return a single record for an already authed user
    const result = await useTypedClientQuery(apollo, {
      user: [{}, { id: true, email: true, name: true }],
    });
    if (result.error) throw new Error(result.error.message);

    const user = result.data.user[0];
    if (!user)
      throw new Error("Unable fetch a user - is the current user logged in?");

    store.setUser(user);
  }),

  logout: thunk(async (store) => {
    store.setAccessToken(null);
    store.setRefreshToken(null);
    store.setUser(null);
  }),

  adminLogout: thunk(async (store) => {
    store.setAccessToken(null);
    store.setRefreshToken(null);
    store.setAdminUser(null);
  }),
};

export default model;
