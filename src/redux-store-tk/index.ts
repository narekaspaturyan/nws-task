import store from './store'

import { ordered, restocked } from './cake-slice'

import { fetchUsers } from './user-slice'

console.log('Initial State ', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State ', store.getState())
})
store.dispatch(ordered())
store.dispatch(ordered())
store.dispatch(ordered())
store.dispatch(restocked(3))

store.dispatch(fetchUsers())
// unsubscribe()

export {}
