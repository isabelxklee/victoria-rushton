import {configureStore} from '@reduxjs/toolkit'
import fontReducer from '../features/fonts/fontSlice'

export const store = configureStore({
  reducer: {
    fonts: fontReducer,
  },
})
