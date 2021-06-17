import { isBrowser } from "./apollo-client";

export function getAccessToken() {
  return isBrowser()
    ? window.localStorage.getItem("hasura-access-token")
    : null;
}

export function setAccessToken(value) {
  return window.localStorage.setItem("hasura-access-token", value);
}

export function getRefreshToken() {
  return window.localStorage.getItem("hasura-refresh-token");
}

export function setRefreshToken(value) {
  return window.localStorage.setItem("hasura-refresh-token", value);
}

export function deleteAccessToken() {
  return window.localStorage.removeItem("hasura-access-token");
}

export function deleteRefreshToken() {
  return window.localStorage.removeItem("hasura-refresh-token");
}
