import {configureStore} from '@reduxjs/toolkit'
import fontReducer from './slices/font-slice.js'

export const store = configureStore({
  reducer: {
    fonts: fontReducer,
  },
})
