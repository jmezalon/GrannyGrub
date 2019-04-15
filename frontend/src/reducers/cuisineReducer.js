import { GET_ALL_CUISINES, GOT_ERROR } from "../actions/actionTypes";

const initialState = {
  cuisines: [],
  callFailed: false
};

export const cuisineReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CUISINES:
      return { ...state, cuisines: action.payload };
    case GOT_ERROR:
      return { ...state, callFailed: true };
    default:
      return state;
  }
};
