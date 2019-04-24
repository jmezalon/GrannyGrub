import axios from 'axios';
import { GET_GRANDMAS_ORDERS, GOT_ERROR } from './actionTypes';

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err,
  };
};

const receiveAllOrders = order => {
  return {
    type: GET_GRANDMAS_ORDERS,
    payload: order,
  };
};

export const getAllOrdersForGrandma = id => dispatch => {
  axios
    .get(`/orders/grandma/${id}`)
    .then(res => {
      dispatch(receiveAllOrders(res.data.order));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
