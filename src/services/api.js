import axios from "axios";
import { BASE_URL, AUTH_TOKEN, USER_ID } from "config";
import store from "store/store";
import Cookies from "js-cookie";

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use(async ({ headers, ...config }) => {
  const state = await store.getState();
  return {
    ...config,
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: `${headers.Authorization ?? state.jwtToken}`,
    },
  };
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      Cookies.remove(AUTH_TOKEN);
      Cookies.remove(USER_ID);
      window.location = `/login?redirectUrl=${window.location.pathname}`;
      return Promise.resolve();
    }
    return Promise.reject(error);
  },
);

export default API;
