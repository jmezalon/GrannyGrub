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
    payload: grandmas
  };
};

export const getAllGrandmas = () => dispatch => {
  axios
    .get("/users")
    .then(res => {
      let grandmas = res.data.users.filter(user => {
        return user.isgrandma;
      });
      dispatch(receiveAllGrandmas(grandmas));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
