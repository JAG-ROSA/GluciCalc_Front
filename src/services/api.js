import axios from "axios";
import { BASE_URL } from "config";
import store from "store/store";

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

export default API;
