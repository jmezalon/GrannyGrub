import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { grandmaReducer } from "./grandmaReducer";
import { cuisineReducer } from "./cuisineReducer";

const RootReducer = combineReducers({
  users: userReducer,
  grandmas: grandmaReducer,
  cuisines: cuisineReducer
});

export default RootReducer;
