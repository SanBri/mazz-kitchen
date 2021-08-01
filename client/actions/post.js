import axios from "axios";

import { setAlert } from "./alert";
import {
  GET_POST,
  GET_POSTS,
  DELETE_POST,
  ADD_POST,
  POST_ERROR,
  ADD_TAG,
} from "./types";

// const URL = "http://localhost:5000";
const URL = "https://mazz-kitchen.herokuapp.com";

// Get All Posts
export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/api/posts/all-posts`);
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Get All Published Posts
export const getPublishedPosts = (category) => async (dispatch) => {
  try {
    let res;
    if (category) {
      res = await axios.get(`${URL}/api/posts/categories/${category}`);
    } else {
      res = await axios.get(`${URL}/api/posts/`);
    }
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Get post
export const getPost = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URL}/api/posts/${id}`);
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// Add post
export const addPost =
  (formData, status, id, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (!edit) {
        let res = await axios.post(`${URL}/api/posts/`, formData, config);
        dispatch({
          type: ADD_POST,
          payload: res.data,
        });
        if (status === "Publié") {
          dispatch(setAlert("L'article a bien été créé", "success"));
        } else if (status === "Brouillon") {
          dispatch(setAlert("L'article a bien été enregistré", "edit"));
        }
      } else {
        await axios.put(`${URL}/api/posts/${id}`, formData, config);
        if (status === "Publié") {
          dispatch(setAlert("L'article a bien été modifié", "success"));
        } else if (status === "Brouillon") {
          dispatch(
            setAlert("Les modifications ont bien été enregistrées", "edit")
          );
        }
      }
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: POST_ERROR,
        payload: {
          msg: err.response,
          status: err.response,
        },
      });
    }
  };

// Delete post
export const deletePost = (id) => async (dispatch) => {
  if (
    window.confirm(
      "Voulez-vous vraiment supprimer définitivement cet article ?"
    )
  ) {
    try {
      await axios.delete(`${URL}/api/posts/${id}`);
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
      dispatch(setAlert("L'article a bien été supprimé", "success"));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: {
          msg: err.response.statusText,
          status: err.response.status,
        },
      });
    }
  }
};

// Add Tag
export const addTag = (tag) => (dispatch) => {
  dispatch({
    type: ADD_TAG,
    payload: tag,
  });
  dispatch(setAlert("Ajout du tag", "success", 2000));
};
