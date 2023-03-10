import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')

import cakeReducer from '../cake-slice'
import userReducer from '../user-slice'
import iceCreamReducer from '../ice-cream-slice'

// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    user: userReducer,
    iceCream: iceCreamReducer,
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export default store
