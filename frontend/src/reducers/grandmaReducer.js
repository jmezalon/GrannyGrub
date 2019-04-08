import { GET_ALL_GRANDMAS, GOT_ERROR } from "../actions/actionTypes";

const initialState = {
  allGrandmas: [],
  callFailed: false
};

const grandmaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GRANDMAS:
      return { ...state, allGrandmas: action.payload };

      break;
    case GOT_ERROR:
      return { ...state, callFailed: true };

      break;
    default:
      return state;
  }
};
