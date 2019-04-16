import { GRANDMAS_DISHES, GOT_ERROR } from '../actions/actionTypes';

const initialState = {
  dishes: [],
  callFailed: false,
};

export const dishReducer = (state = initialState, action) => {
  switch (action.type) {
    case GRANDMAS_DISHES:
      return { ...state, dishes: action.payload };

    case GOT_ERROR:
      return { ...state, callFailed: true };

    default:
      return state;
  }
};
