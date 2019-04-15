import { GET_ALL_GRANDMAS, GOT_ERROR } from "../actions/actionTypes";

const initialState = {
  grandmas: [],
  callFailed: false
};

export const grandmaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GRANDMAS:
      return { ...state, grandmas: action.payload };
    case GOT_ERROR:
      return { ...state, callFailed: true };
    default:
      return state;
  }
};
