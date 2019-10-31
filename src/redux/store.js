import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducers/userReducer.js";
import { usersTableReducer } from "./reducers/usersTableReducer.js";
import { weatherReducer } from "./reducers/weatherReducer.js";
import {productsTableReducer} from "./reducers/productsTableReducer.js"
import logger from "redux-logger";
import thunk from "redux-thunk";

const singleReducer = combineReducers({
  userReducer,
  usersTableReducer,
  weatherReducer,
  productsTableReducer
});

//Creates an empty store object{}
const store = createStore(singleReducer, applyMiddleware(logger, thunk));

console.log(store.getState());

export default store;
