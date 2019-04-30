import axios from 'axios';
import {
  ALL_LABELS,
  GRANDMAS_DISHES,
  GET_SINGLE_DISH,
  GOT_ERROR,
  SET_SELECTED_DISH
} from './actionTypes';

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err,
  };
};

export const setSelectedDish = dish => {
  return {
    type: SET_SELECTED_DISH,
    payload: dish,
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

export const receiveOneDish = dish => {
  return {
    type: GET_SINGLE_DISH,
    payload: dish,
  };
};

export const getOneDish = id => dispatch => {
  // let id = parseInt(this.props.match.params.id);
  axios
    .get(`/dishes/${id}`)
    .then(res => {
      dispatch(receiveOneDish(res.data.dish));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};

export const deleteDish = (dish_id, grannyId) => dispatch => {
  debugger;
  axios
    .delete(`/dishes/${dish_id}`)
    .then(() => {
      dispatch(getGrandmasDishes(grannyId));
    })
    .catch(err => {
      return dispatch(gotError(err));
      console.log('deleted dish');
    });
};
