import axios from "axios";
import {
  GET_ALL_GRANDMAS,
  SET_CURRENT_USER,
  GET_ONE_GRANDMA,
  DELETE_USER_ACCOUNT,
  GOT_ERROR
} from "./actionTypes";

import Auth from "../userauth/utils/Auth";
import { removeCurrentUser } from "./userAuthActions";

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err
  };
};

// export const setCurrentUser = currentUser => {
//   return { type: "SET_CURRENT_USER", payload: currentUser };
// };

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

// export const deleteUserAccount = id => {
//   return {
//     type: DELETE_USER_ACCOUNT,
//     payload: id,
//   };
// };

export const getAllGrandmas = () => dispatch => {
  axios
    .get("/users")
    .then(res => {
      // let grandmas = res.data.users.filter(user => {
      //   return user.isgrandma;
      // });
      return dispatch(receiveAllGrandmas(res.data.users));
    })
    .catch(err => {
      return dispatch(gotError(err));
    });
};

export const getOneGrandma = id => dispatch => {
  // let id = parseInt(this.props.match.params.id);
  axios
    .get(`/users/grandma/${id}`)
    .then(res => {
      return dispatch(receiveOneGrandma(res.data.user));
    })
    .catch(err => {
      return dispatch(gotError(err));
    });
};

export const deleteGrandmaAccount = id => dispatch => {
  axios
    .delete(`/users/${id}`)
    .then(() => {
      Auth.deauthenticateUser();
      return dispatch(removeCurrentUser(null));
    })
    .catch(err => {
      return dispatch(gotError(err));
      console.log("deleted usesr");
    });
};
