import { SET_SELECTED_DISH, GOT_ERROR } from "../actions/actionTypes";

const initialState = {
  selectedDish: [],
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
