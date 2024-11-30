import { createSlice } from '@reduxjs/toolkit'

export interface TestSlice {
  count: number
  order: number
  countSum: number
  orderSum: number
}

const initialState: TestSlice = {
  count: 0,
  order: 0,
  countSum: 0,
  orderSum: 0,
}

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    setCount: (state, { payload }) => {
      state.count += payload
    },

    setOrder: (state, { payload }) => {
      state.order += payload
    },

    setCountSum: (state, { payload }) => {
      state.countSum += payload
    },

    setOrderSum: (state, { payload }) => {
      state.orderSum += payload
    },
  },
})

export const { setCount, setOrder, setCountSum, setOrderSum } =
  testSlice.actions

export default testSlice.reducer
