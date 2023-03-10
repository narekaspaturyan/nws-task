import { BUY_CAKE, BUY_ICE_CREAM } from '../actions'

// reducer is a function that modifies the store

const initialIceCreamState = {
  numOfIceCream: 20,
}
const initialCakeState = {
  numOfCakes: 10,
}

export const cakeReducer = (
  state = initialCakeState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }

    default:
      return state
  }
}

export const iceCreamReducer = (
  state = initialIceCreamState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCream - 1,
      }

    default:
      return state
  }
}
