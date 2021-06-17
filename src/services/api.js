import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL, AUTH_TOKEN } from "config";

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use(({ headers, ...config }) => ({
  ...config,
  headers: {
    ...headers,
    "Content-Type": "application/json",
    Authorization: `${headers.Authorization || Cookies.get(AUTH_TOKEN)}`,
  },
}));

export default API;
