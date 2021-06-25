import Cookies from "js-cookie";
import { AUTH_TOKEN, USER_ID } from "config";
import store from "store/store";
import {
  registrationRequest,
  registrationFailed,
  registrationSuccess,
  logoutRequest,
  logoutFailed,
  logoutSuccess,
  loginRequest,
  loginSuccess,
  loginFailed,
  getUserSuccess,
  getUserFailed,
  getUserRequest,
  updateUserSuccess,
  updateUserFailed,
  updateUserRequest,
} from "store";
import API from "../api";

export default class UserManager {
  static async registerUser(email, password) {
    store.dispatch(registrationRequest());
    try {
      const response = await API.post("/users", { user: { email, password } });
      store.dispatch(
        registrationSuccess({
          id: response.data.id,
          firstName: response.data.first_name,
        }, response.headers.authorization),
      );
      Cookies.set(AUTH_TOKEN, response.headers.authorization, { expires: 7, secure: true, sameSite: "strict" });
      Cookies.set(USER_ID, response.data.id, { expires: 7, secure: true, sameSite: "strict" });
    } catch (error) {
      store.dispatch(registrationFailed(error.message));
    }
  }

  static async logoutUser() {
    store.dispatch(logoutRequest());
    try {
      await API.delete("/users/sign_out");
      store.dispatch(logoutSuccess());
      Cookies.remove(AUTH_TOKEN, { secure: true, sameSite: "strict" });
      Cookies.remove(USER_ID, { secure: true, sameSite: "strict" });
    } catch (error) {
      store.dispatch(logoutFailed(error.message));
    }
  }

  static async loginUser(email, password) {
    store.dispatch(loginRequest());
    try {
      const response = await API.post("/users/sign_in", { user: { email, password } });
      store.dispatch(
        loginSuccess({
          id: response.data.id,
          firstName: response.data.first_name,
        }, response.headers.authorization),
      );
      Cookies.set(AUTH_TOKEN, response.headers.authorization, { expires: 7, secure: true, sameSite: "strict" });
      Cookies.set(USER_ID, response.data.id, { expires: 7, secure: true, sameSite: "strict" });
    } catch (error) {
      store.dispatch(loginFailed(error.message));
    }
  }

  static async getUser() {
    store.dispatch(getUserRequest());
    try {
      const response = await API.get(`/users/${Cookies.get(USER_ID)}`);
      store.dispatch(getUserSuccess());
      return response.data;
    } catch (error) {
      store.dispatch(getUserFailed(error));
      return error.message;
    }
  }

  static async updateUser(user) {
    store.dispatch(updateUserRequest());
    try {
      const response = await API.put(`/users/${Cookies.get(USER_ID)}`, user);
      store.dispatch(
        updateUserSuccess({
          id: response.data.id,
          firstName: response.data.first_name,
        }),
      );
      return response.data;
    } catch (error) {
      store.dispatch(updateUserFailed(error));
      return error.message;
    }
  }

  static async forgotPassword(user) {
    const response = await API.post("/password/forgot", user);
    return response.data;
  }

  static async resetPassword(user) {
    const response = await API.post("/password/reset", user);
    return response.data;
  }
}
