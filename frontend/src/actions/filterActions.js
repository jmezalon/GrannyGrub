import axios from "axios";
import { FILTER_BY_CUISINES, GOT_ERROR } from "./actionTypes";

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err
  };
};

export const receiveAllCuisines = grandmas => {
  return {
    type: FILTER_BY_CUISINES,
    payload: grandmas
  };
};

export const allGrandmasByCuisines = id => dispatch => {
  axios
    .get(`/filter/map-cuisine/${id}`)
    .then(res => {
      dispatch(receiveAllCuisines(res.data.grandma));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
