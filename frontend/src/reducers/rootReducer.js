import { combineReducers } from "redux";
import { grandmaReducer } from "./grandmaReducer";

const RootReducer = combineReducers({ grandmas: grandmaReducer });

export default RootReducer;
