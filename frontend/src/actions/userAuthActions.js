import axios from "axios";
import { SET_CURRENT_USER, GET_ONE_GRANDMA, GOT_ERROR } from "./actionTypes";

import Auth from "../userauth/utils/Auth";

export const setCurrentUser = currentUser => {
  return { type: "SET_CURRENT_USER", payload: currentUser };
};

export const receiveOneGrandma = grandma => {
  return {
    type: GET_ONE_GRANDMA,
    payload: grandma
  };
};

export const getOneGrandma = id => dispatch => {
  // let id = parseInt(this.props.match.params.id);
  axios
    .get(`/users/grandma/${id}`)
    .then(res => {
      dispatch(receiveOneGrandma(res.data.user));
    })
    .catc(err => {
      dispatch(gotError(err));
    });
};

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err
  };
};

export const registerUser = user => dispatch => {
  console.log("heyyyyy");

  return axios.post("/users/new", user).then(() => {
    return dispatch(dispatch(setCurrentUser(null)));
  });
};

export const loginUser = user => dispatch => {
  return axios
    .post("/users/login", user)
    .then(res => {
      Auth.authenticateUser(res.data.email);
      return dispatch(setCurrentUser(res.data));
    })
    .catch(err => {
      dispatch(gotError(err));
      Auth.deauthenticateUser();
    });
};

export const checkAuthenticateStatus = () => dispatch => {
  return;
  axios
    .post("/users/isLoggedIn")
    .then(res => {
      Auth.authenticateUser(res.data.email);
      return dispatch(setCurrentUser(res.data));
    })
    .then(user => {
      if (user.data.user && user.data.user.email === Auth.getToken()) {
        return dispatch(setCurrentUser(user.data.user));
      } else {
        if (user.data.user.email) {
          logoutUser();
        } else {
          Auth.deauthenticateUser();
        }
      }
    });
};

export const logoutUser = () => dispatch => {
  axios
    .post("/users/logout")
    .then(() => {
      Auth.deauthenticateUser();
    })
    .then(() => {
      this.checkAuthenticateStatus();
    })
    .then(res => this.props.history.push("/auth/login"))
    .catch(err => {
      console.log("logout err", err);
    });
};

// await this.props.history.push(
//   `/grandma/${parseInt(response.data.id)}/dashboard`
// );
// };
//  Auth.authenticateUser(email);
