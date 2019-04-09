import { combineReducers } from "redux";
<<<<<<< HEAD
import { grandmaReducer } from "./grandmaReducer";
import { cuisineReducer } from "./cuisineReducer";

const RootReducer = combineReducers({
  grandmas: grandmaReducer,
=======
import { userReducer } from "./userReducer";
import { cuisineReducer } from "./cuisineReducer";

const RootReducer = combineReducers({
  users: userReducer,
>>>>>>> seed
  cuisines: cuisineReducer
});

export default RootReducer;
