import axios from 'axios';
import { ADD_NEW_DISH, GRANDMAS_DISHES, GOT_ERROR } from './actionTypes';

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err,
  };
};

export const receiveGrandmasDishes = dish => {
  return {
    type: GRANDMAS_DISHES,
    payload: dish,
  };
};

export const getGrandmasDishes = id => dispatch => {
  axios
    .get(`/users/${id}/dishes`)
    .then(res => {
      dispatch(receiveGrandmasDishes(res.data.dishes));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
