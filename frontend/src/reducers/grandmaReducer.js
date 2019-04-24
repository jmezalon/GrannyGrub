import {
  GET_ALL_GRANDMAS,
  GET_ONE_GRANDMA,
  GOT_ERROR,
  SET_CURRENT_USER,
  FILTER_BY_CUISINES
} from '../actions/actionTypes';

const initialState = {
  grandmas: [],
  grandma: [],

  callFailed: false

};

export const grandmaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GRANDMAS:
      return { ...state, grandmas: action.payload };
    case FILTER_BY_CUISINES:
      return { ...state, grandmas: action.payload };
    case GET_ONE_GRANDMA:
      return { ...state, grandma: action.payload };
    case GOT_ERROR:
      return { ...state, callFailed: true };
    default:
      return state;
  }
};
