import { applyMiddleware, combineReducers, createStore } from 'redux'
import { iceCreamReducer, cakeReducer } from '../reducers/index'

import { buyCake } from '../actions/index'

const rootReducer = combineReducers({
  iceCream: iceCreamReducer,
  cake: cakeReducer,
})

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware)) // applyMiddleWare
const store = createStore(rootReducer) // apply middle ware

store.dispatch(buyCake())
console.log(store.getState())
