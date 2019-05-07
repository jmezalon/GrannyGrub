import {
  SET_CURRENT_USER,
  GOT_ERROR,
  REMOVE_CURRENT_USER
} from "../actions/actionTypes";

const initialState = {
  currentUser: [],
  userId: "",
  loggedIn: false
};

export const userAuthReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        userId: action.payload.id
      };

    case REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        userId: null,
        loggedIn: false
      };
    case GOT_ERROR:
      return { ...state, callFailed: true };

    default:
      return state;
  }
};

// if (!state.userId) {
//   return {
//     ...state,
//     currentUser: action.payload,
//     userId: action.payload.id,
//     loggedIn: true
//   };
// } else {
//   return {
//     ...state,
//     currentUser: action.payload,
//     userId: null,
//     loggedIn: false
//   };
// }
