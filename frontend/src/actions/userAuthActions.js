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
      console.log(res.data);
      return dispatch(setCurrentUser(res.data));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};

export const getCurrentUser = user => dispatch => {
  return axios
    .post("/users/isLoggedIn", user)
    .then(res => {
      Auth.authenticateUser(res.data.email);
      return dispatch(setCurrentUser(res.data));
    })
    .catch(err => {
      Auth.deauthenticateUser();
      dispatch(gotError(err));
    });
};

export const checkAuthenticateStatus = () => dispatch => {
  return axios.get("/users/isLoggedIn").then(user => {
    if (user.data.email === Auth.getToken()) {
      return dispatch(setCurrentUser(user.data));
    } else {
      if (user.data.email) {
        logoutUser();
      } else {
        Auth.deauthenticateUser();
      }
    }
  });
};

export const logoutUser = () => dispatch => {
  return axios
    .post("/users/logout")
    .then(() => {
      Auth.deauthenticateUser();
    })
    .then(() => {
      checkAuthenticateStatus();
    })
    .catch(err => {
      console.log("logout err", err);
    });
};

// await this.props.history.push(
//   `/grandma/${parseInt(response.data.id)}/dashboard`
// );
// };
//  Auth.authenticateUser(email);
