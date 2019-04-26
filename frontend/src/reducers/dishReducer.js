import {
  GRANDMAS_DISHES,
  ALL_LABELS,
  GOT_ERROR,
  SET_SELECTED_DISH,
  GET_SINGLE_DISH
} from "../actions/actionTypes";

const initialState = {
  dishes: [],
  callFailed: false,
  labels: [],
  selectedDish: [],
  type: [],
  dish: []
};

export const dishReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case GRANDMAS_DISHES:
      return { ...state, dishes: action.payload };
    case SET_SELECTED_DISH:
      return { ...state, selectedDish: action.payload };
    case ALL_LABELS:
      return { ...state, labels: action.payload };

    case GET_SINGLE_DISH:
      return { ...state, dish: action.payload };

    case GOT_ERROR:
      return { ...state, callFailed: true };

    default:
      return state;
  }
};
