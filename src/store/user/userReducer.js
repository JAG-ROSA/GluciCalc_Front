import { AUTH_TOKEN, USER_ID } from "config";
import Cookies from "js-cookie";
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

const INITIAL_STATE = {
  loading: false,
  isLogged: !!Cookies.get(AUTH_TOKEN),
  userProfile: { id: Cookies.get(USER_ID), firstName: "" },
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTRATION_FAILED:
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isLogged: false,
        error: action.error,
      };
    case REGISTRATION_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
        userProfile: action.userProfile,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isLogged: false,
        userProfile: {},
      };
    case LOGOUT_FAILED:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default userReducer;
