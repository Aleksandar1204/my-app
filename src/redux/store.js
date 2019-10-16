import {createStore ,combineReducers, applyMiddleware} from 'redux'
import {userReducer} from './reducers/userReducer.js'
import logger from 'redux-logger'



const singleReducer = combineReducers({
    userReducer,
})


//Creates an empty store object{}
const store = createStore (
    singleReducer,
    applyMiddleware(logger)
    )

console.log(store.getState())

export default store