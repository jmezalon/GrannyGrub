import axios from "axios";
import { GET_ALL_GRANDMAS, GOT_ERROR } from "./actionTypes";

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err
  };
};

export const receiveAllGrandmas = grandmas => {
  return {
    type: GET_ALL_GRANDMAS,
    grandmas
  };
};

export const gotAllGrandmas = () => dispatch => {
  axios
    .get("/grandmas")
    .then(res => {
      dispatch(receiveAllGrandmas(res.data.grandmas));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
