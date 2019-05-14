import axios from "axios";
import { GET_GRANDMAS_ORDERS, GOT_ERROR } from "./actionTypes";

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err
  };
};

const receiveAllOrders = orders => {
  return {
    type: GET_GRANDMAS_ORDERS,
    payload: orders
  };
};

export const getAllOrdersForGrandma = grandma_id => dispatch => {
  axios
    .get(`/orders/grandma/${grandma_id}`)

    .then(res => {
      dispatch(receiveAllOrders(res.data.orders));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};
