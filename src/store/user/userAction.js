import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "./userType";

export const registrationRequest = (id) => ({
  type: REGISTRATION_REQUEST,
  userId: id,
});

export const registrationSuccess = (id) => ({
  type: REGISTRATION_SUCCESS,
  userId: id,
});

export const registrationFailed = (error) => ({
  type: REGISTRATION_FAILED,
  error,
});

export const loginRequest = (id) => ({
  type: LOGIN_REQUEST,
  userId: id,
});

export const loginSuccess = (id) => ({
  type: LOGIN_SUCCESS,
  userId: id,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error,
});

export const logoutRequest = (error) => ({
  type: LOGOUT_REQUEST,
  error,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailed = (error) => ({
  type: LOGOUT_FAILED,
  error,
});
