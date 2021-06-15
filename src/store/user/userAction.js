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

export const registrationRequest = () => ({
  type: REGISTRATION_REQUEST,
});

export const registrationSuccess = (user) => ({
  type: REGISTRATION_SUCCESS,
  userProfile: user,
});

export const registrationFailed = (error) => ({
  type: REGISTRATION_FAILED,
  error,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  userProfile: user,
});

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailed = (error) => ({
  type: LOGOUT_FAILED,
  error,
});
