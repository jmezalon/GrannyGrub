import axios from "axios";
import { GET_ALL_CUISINES, GOT_ERROR } from "./actionTypes";

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err
  };
};

const receiveAllCuisines = cuisines => {
  return {
    type: GET_ALL_CUISINES,
    cuisines
  };
};

export const getAllCuisines = () => dispatch => {
  axios
    .get("/cuisines")
    .then(res => {
      dispatch(receiveAllCuisines(res.data.cuisines));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
