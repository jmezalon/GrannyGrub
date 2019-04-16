import { GET_ALL_USERS, GOT_ERROR } from '../actions/actionTypes';

const initialState = {
  users: [],
  callFailed: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.payload };

    case GOT_ERROR:
      return { ...state, callFailed: true };

    default:
      return state;
  }
};
