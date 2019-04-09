import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cuisineReducer } from "./cuisineReducer";

const RootReducer = combineReducers({
  users: userReducer,
  cuisines: cuisineReducer
});

export default RootReducer;
