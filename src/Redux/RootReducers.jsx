import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import iceCreamReducer from "./IceCream/IceCreamReducer";
import userReducer from "./User/userReducer";

const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReducers;
