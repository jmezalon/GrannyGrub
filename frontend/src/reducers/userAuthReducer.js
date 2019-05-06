import {
  SET_CURRENT_USER,
  GOT_ERROR,
  REMOVE_CURRENT_USER
} from "../actions/actionTypes";

const initialState = {
  currentUser: [],
  userId: "",
  loggedIn: false,
  isGrandma: false
};

export const userAuthReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        userId: action.payload.id,
        isGrandma: action.payload.isGrandma
      };

    case REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        userId: null,
        loggedIn: false,
        isGrandma: false
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
