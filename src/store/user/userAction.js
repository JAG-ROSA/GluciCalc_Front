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
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  RESET_ERRORS,
} from "./userType";

export const registrationRequest = () => ({
  type: REGISTRATION_REQUEST,
});

export const registrationSuccess = (user, token) => ({
  type: REGISTRATION_SUCCESS,
  userProfile: user,
  jtwToken: token,
});

export const registrationFailed = (error) => ({
  type: REGISTRATION_FAILED,
  error,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (user, token) => ({
  type: LOGIN_SUCCESS,
  userProfile: user,
  jtwToken: token,
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

export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = () => ({
  type: GET_USER_SUCCESS,
});

export const getUserFailed = (error) => ({
  type: GET_USER_FAILED,
  error,
});

export const updateUserRequest = () => ({
  type: UPDATE_USER_REQUEST,
});

export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  userProfile: user,
});

export const updateUserFailed = (error) => ({
  type: UPDATE_USER_FAILED,
  error,
});

export const resetErrors = () => ({
  type: RESET_ERRORS,
});
