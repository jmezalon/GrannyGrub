import { SET_CURRENT_USER, GOT_ERROR } from "../actions/actionTypes";

const initialState = {
  currentUser: [],
  loggedIn: false
};

export const userAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload, loggedIn: true };
    case GOT_ERROR:
      return { ...state, callFailed: true };

    default:
      return state;
  }
};