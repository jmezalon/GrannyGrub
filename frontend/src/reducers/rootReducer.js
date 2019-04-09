import { combineReducers } from "redux";
import { grandmaReducer } from "./grandmaReducer";
import { cuisineReducer } from "./cuisineReducer";

const RootReducer = combineReducers({
  grandmas: grandmaReducer,
  cuisines: cuisineReducer
});

export default RootReducer;
