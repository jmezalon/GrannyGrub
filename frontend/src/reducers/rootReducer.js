import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { grandmaReducer } from "./grandmaReducer";
// import { filterReducer } from "./filterReducer";
import { cuisineReducer } from "./cuisineReducer";
import { orderReducer } from "./orderReducer";
import { dishReducer } from "./dishReducer";
import { userAuthReducer } from "./userAuthReducer";
const RootReducer = combineReducers({
  users: userReducer,
  grandmas: grandmaReducer,
  cuisines: cuisineReducer,
  // filteredGrandmas: filterReducer,
  dishes: dishReducer,
  userAuth: userAuthReducer,
  orders: orderReducer
});

export default RootReducer;
