import axios from "axios";
import { SET_CURRENT_USER, GOT_ERROR } from "./actionTypes";

import Auth from "../userauth/utils/Auth";

export const setCurrentUser = currentUser => {
  return { type: "SET_CURRENT_USER", payload: currentUser };
};

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err
  };
};

export const registerUser = (user, loginPrams) => dispatch => {
  console.log("heyyyyy");

  return axios.post("/users/new", user).then(() => {
    return dispatch(loginUser(loginPrams));
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
