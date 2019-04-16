import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { grandmaReducer } from './grandmaReducer';
// import { filterReducer } from "./filterReducer";
import { cuisineReducer } from './cuisineReducer';

import { dishReducer } from './dishReducer';

const RootReducer = combineReducers({
  users: userReducer,
  grandmas: grandmaReducer,
  cuisines: cuisineReducer,
  filteredGrandmas: filterReducer,
  dishes: dishReducer,
});

export default RootReducer;
