import axios from "axios";
import { GET_ALL_USERS, GOT_ERROR } from "./actionTypes";

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err
  };
};

export const receiveAllUsers = users => {
  return {
    type: GET_ALL_USERS,
    users
  };
};

export const getAllUsers = () => dispatch => {
  axios
    .get("/users")
    .then(res => {
      debugger;
      dispatch(receiveAllUsers(res.data.users));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
