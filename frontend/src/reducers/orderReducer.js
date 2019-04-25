import { GET_GRANDMAS_ORDERS, GOT_ERROR } from "../actions/actionTypes";

const initialState = {
  orders: [],
  callFailed: false
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GRANDMAS_ORDERS:
      return { ...state, orders: action.payload };
    case GOT_ERROR:
      return { ...state, callFailed: true };
    default:
      return state;
  }
};
