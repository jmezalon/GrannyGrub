import axios from "axios";
import {
  GET_ALL_GRANDMAS,
  SET_CURRENT_USER,
  GET_ONE_GRANDMA,
  GOT_ERROR
} from "./actionTypes";

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err
  };
};

export const setCurrentUser = currentUser => {
  return { type: "SET_CURRENT_USER", payload: currentUser };
};

export const receiveAllGrandmas = grandmas => {
  return {
    type: GET_ALL_GRANDMAS,
    payload: grandmas
  };
};

export const receiveOneGrandma = grandma => {
  return {
    type: GET_ONE_GRANDMA,
    payload: grandma
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

export const getOneGrandma = id => dispatch => {
  // let id = parseInt(this.props.match.params.id);
  axios
    .get(`/users/grandma/${id}`)
    .then(res => {
      dispatch(receiveOneGrandma(res.data.user));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
