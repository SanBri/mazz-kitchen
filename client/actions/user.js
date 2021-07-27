import axios from "axios";

import { setAlert } from "./alert";

const URL = "https://mazz-kitchen.herokuapp.com";

// Change Settings
export const editUserSettings = (formData, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.put(`${URL}/api/users/settings/${id}`, formData, config);
    dispatch(setAlert("Vos informations ont bien été modifiées", "success"));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};
