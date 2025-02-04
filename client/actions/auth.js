import axios from "axios";

import setAuthToken from "../utils/setAuthToken";
import { setAlert } from "./alert";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

const URL = "http://localhost:5000";
// const URL = "https://mazz-kitchen.herokuapp.com";

// Load User
export const loadUser = () => async (dispatch) => {
  if (typeof window !== "undefined") {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }

  try {
    const res = await axios.get(`${URL}/api/auth`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login
export const login =
  ({ mail, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ mail, password });
    try {
      const res = await axios.post(`${URL}/api/auth`, body, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(loadUser());
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  };

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
