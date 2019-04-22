import axios from 'axios';
import { ALL_LABELS, GRANDMAS_DISHES, GOT_ERROR } from './actionTypes';

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

export const receiveAllLabels = labels => {
  return {
    type: ALL_LABELS,
    payload: labels,
  };
};

export const getAllLabels = id => dispatch => {
  axios
    .get('/labels')
    .then(res => {
      dispatch(receiveAllLabels(res.data.labels));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
