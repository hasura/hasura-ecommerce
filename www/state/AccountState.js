import { atom } from "jotai";
import { store } from "../store";
import {
  deleteAccessToken,
  deleteRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../utils/access-and-refresh-tokens";
import { appStore } from "./persistence";

export const actions = {
  SIGNING_UP: "signing_up",
  SIGNED_UP: "signed_up",
  LOGGING_IN: "logging_in",
  LOGGED_IN: "logged_in",
  LOGGING_OUT: "logging_out",
  LOGGED_OUT: "logged_out",
  HYDRATING: "hydrating",
  HYDRATED: "hydrated",
};

export const state = {
  name: "",
  email: "",
  authing: false,
  loggedIn: false,
  errors: [],
  tokenValid: false,
};

const authingTrue = { authing: true };
const authingFalse = { authing: false };

const persistUser = async (user) => await appStore.setItem("user", user);

const accountReducer = async (prev, action) => {
  if (action.type === actions.SIGNING_UP) {
    const payload = { ...state, ...authingTrue };
    await persistUser(payload);
    return payload;
  }

  if (action.type === actions.SIGNED_UP) {
    const payload = {
      ...state,
      ...action.value,
      ...authingFalse,
      loggedIn: true,
      tokenValid: true,
    };

    await persistUser(payload);
    setAccessToken(payload.token);
    setRefreshToken(payload.refreshToken);

    store.getActions().setAccessToken(payload.token);
    store.getActions().setRefreshToken(payload.refreshToken);
    store.getActions().fetchAndSetUser();

    return payload;
  }

  if (action.type === actions.LOGGING_IN) {
    const payload = { ...state, ...authingTrue };
    await persistUser(payload);
    return payload;
  }

  if (action.type === actions.LOGGED_IN) {
    const payload = {
      ...state,
      ...action.value,
      ...authingFalse,
      loggedIn: true,
      tokenValid: true,
    };

    await persistUser(payload);
    setAccessToken(payload.token);
    setRefreshToken(payload.refreshToken);

    store.getActions().setAccessToken(payload.token);
    store.getActions().setRefreshToken(payload.refreshToken);
    store.getActions().fetchAndSetUser();

    return payload;
  }

  if (action.type === actions.LOGGING_OUT) {
    await appStore.setItem("user", state);
    deleteAccessToken();
    deleteRefreshToken();

    store.getActions().logout();

    const request = await fetch("api/logout", { method: "GET" });
    const response = await request.json();
    if (!response.success) console.log("Error clearing user cookie on logout");

    return state;
  }

  if (action.type === actions.LOGGED_OUT) {
    return;
  }

  if (action.type === actions.HYDRATING) {
    await appStore.setItem("user", { ...state, authing: true });
    return { ...state, authing: true };
  }

  if (action.type === actions.HYDRATED) {
    const user = await appStore.getItem("user");
    if (user) {
      return user;
    }
    return state;
  }

  throw new Error("unknown action type");
};

export const accountReducerAtom = atom(state, (get, set, action) => {
  (async () => {
    set(
      accountReducerAtom,
      await accountReducer(get(accountReducerAtom), action)
    );
  })();
});
