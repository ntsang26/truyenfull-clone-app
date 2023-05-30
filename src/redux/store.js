import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slice/dataSlice.js'

export const store = configureStore({
  reducer: {
    data: dataReducer
  },
})