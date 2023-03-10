import { ordered as aaa } from '../cake-slice'

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
  numOfIcecreams: 10,
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state: any) => {
      state.numOfIcecreams--
    },
    restocked: (state: any, action: any) => {
      state.numOfIcecreams += action.payload
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(aaa, (state: any) => {
      state.numOfIcecreams--
    })
  },
  // extraReducers: {
  //   ['cake/ordered']: state => {
  //     state.numOfIcecreams--
  //   }
  // }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
