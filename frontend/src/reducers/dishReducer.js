import { GRANDMAS_DISHES, ALL_LABELS, GOT_ERROR } from "../actions/actionTypes";

const initialState = {
  dishes: [],
  callFailed: false,
  labels: []
};

export const dishReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case GRANDMAS_DISHES:
      return { ...state, dishes: action.payload };

    case ALL_LABELS:
      return { ...state, labels: action.payload };

    case GOT_ERROR:
      return { ...state, callFailed: true };

    default:
      return state;
  }
};
