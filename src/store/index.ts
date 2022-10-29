import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import categorieSlice from 'features/categorie-slice'
import categorieByIdSlice from 'features/category-by-id-slice/index'

export const store = configureStore({
  reducer: {
    categories: categorieSlice,
    categoriesById: categorieByIdSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
