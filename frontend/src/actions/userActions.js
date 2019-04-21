import axios from 'axios';
import { GET_ALL_USERS, SET_CURRENT_USER, GOT_ERROR } from './actionTypes';

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err,
  };
};

export const receiveAllUsers = users => {
  return {
    type: GET_ALL_USERS,
    payload: users,
  };
};

export const getAllUsers = () => dispatch => {
  axios
    .get('/users')
    .then(res => {
      let users = res.data.users.filter(user => {
        return !user.isgrandma;
      });
      dispatch(receiveAllUsers(users));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
