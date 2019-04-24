import axios from "axios";
import { FILTER_BY_CUISINES, GOT_ERROR } from "./actionTypes";

export const gotError = err => {
  return {
    type: GOT_ERROR,
    payload: err
  };
};

export const receiveAllCuisines = grandmas => {
  return {
    type: FILTER_BY_CUISINES,
    payload: grandmas
  };
};

export const grandmasByMultiCriteria = data => dispatch => {
  axios
    .post(`/filter/criteria`, data)
    .then(res => {
      dispatch(receiveAllCuisines(res.data.grandmas));
    })
    .catch(err => {
      dispatch(gotError(err));
    });
};

// export const filterByType = id => dispatch => {
//   axios
//     .get(`/filter/type/${id}`)
//     .then(res => {
//       dispatch(receiveAllCuisines(res.data.grandmas));
//     })
//     .catch(err => {
//       dispatch(gotError(err));
//     });
// };
