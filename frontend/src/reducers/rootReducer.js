import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { grandmaReducer } from "./grandmaReducer";
import { filterReducer } from "./filterReducer";
import { cuisineReducer } from "./cuisineReducer";

const RootReducer = combineReducers({
  users: userReducer,
  grandmas: grandmaReducer,
  cuisines: cuisineReducer,
  filteredGrandmas: filterReducer
});

export default RootReducer;
