import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { endpoints } from 'api'

export interface categorieState {
  categoriesById: { height: number; id: string; width: number; url: string }[]
  id: number
  limit: number
  page: number
  status: 'resolved' | 'loading' | 'failed' | 'idle'
  error: null | string
}

const initialState: categorieState = {
  categoriesById: [],
  id: 1,
  limit: 10,
  page: 1,
  status: 'idle',
  error: null,
}

export const getCategoriesById: any = createAsyncThunk(
  'categoriesById/getCategoriesById',
  async (obj, { rejectWithValue, dispatch, getState }) => {
    //@ts-ignore
    const categoriesById: any = getState().categoriesById.categoriesById
    const { id, limit, page } = obj as any
    try {
      const res = await axios.get(`${endpoints.base}/images/search`, {
        params: {
          limit,
          page,
          category_ids: id,
        },
      })

      if (res.status === 200) {
        dispatch(addId(id))
        dispatch(addPage(page))
        dispatch(addLimit(limit))
        return [...categoriesById, ...res.data]
      }
    } catch (error: any) {
      return rejectWithValue(error.message)
    }
  }
)

const categorieByIdSlice = createSlice({
  name: 'categoriesById',
  initialState,
  reducers: {
    addId(state, action) {
      state.id = action.payload
    },
    addPage(state, action) {
      state.page = action.payload
    },
    addLimit(state, action) {
      state.limit = action.payload
    },
    clearCategorieById(state) {
      state.categoriesById = []
    },
  },
  extraReducers: {
    [getCategoriesById.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [getCategoriesById.fulfilled]: (state, action) => {
      state.error = null
      state.categoriesById = action.payload
      state.status = 'resolved'
    },
    [getCategoriesById.rejected]: (state, action) => {
      state.error = action.payload
      state.status = 'failed'
    },
  },
})

export const { addId, addPage, addLimit, clearCategorieById } =
  categorieByIdSlice.actions

export default categorieByIdSlice.reducer
