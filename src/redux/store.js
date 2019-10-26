import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./reducers/userReducer.js";
import { usersTableReducer } from "./reducers/usersTableReducer.js";
import { weatherReducer } from "./reducers/weatherReducer.js";
import logger from "redux-logger";

const singleReducer = combineReducers({
  userReducer,
  usersTableReducer,
  weatherReducer
});

//Creates an empty store object{}
const store = createStore(singleReducer, applyMiddleware(logger));

console.log(store.getState());

export default store;
