import { AUTH_TOKEN, USER_ID } from "config";
import Cookies from "js-cookie";
import {
  REGITRATION_REQUEST,
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
  userId: Cookies.get(USER_ID),
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case REGITRATION_REQUEST:
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
        userId: action.userId,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isLogged: false,
        userId: "",
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
