import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { endpoints } from 'api'

export interface categorieState {
  categories: Array<{
    id: string
    name: string
  }>
  status: 'resolved' | 'loading' | 'failed' | 'idle'
  error: null | string
}

const initialState: categorieState = {
  categories: [],
  status: 'idle',
  error: null,
}

export const getCategories: any = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue, dispatch, getState }) => {
    try {
      const res = await axios.get(`${endpoints.base}/categories`)

      if (res.status === 200) {
        return res.data
      }
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

const categorieSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [getCategories.fulfilled]: (state, action) => {
      state.error = null
      state.categories = action.payload
      state.status = 'resolved'
    },
    [getCategories.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'failed'
    },
  },
})

export default categorieSlice.reducer
