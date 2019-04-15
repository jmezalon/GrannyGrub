import { FILTER_BY_CUISINES, GOT_ERROR } from "../actions/actionTypes";

const initialState = {
  grandmasByCuisines: [],
  callFailed: false
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_CUISINES:
      return { ...state, grandmasByCuisines: action.payload };
    case GOT_ERROR:
      return { ...state, callFailed: true };
    default:
      return state;
  }
};
