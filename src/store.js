import {configureStore} from '@reduxjs/toolkit'
import fontReducer from './slices/font-slice.js'
import licenseReducer from './slices/license-slice.js'

export const store = configureStore({
  reducer: {
    fonts: fontReducer,
    licenses: licenseReducer,
  },
})
