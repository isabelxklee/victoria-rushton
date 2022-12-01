import {configureStore} from '@reduxjs/toolkit'
import fontReducer from './slices/font-slice.js'
import licenseReducer from './slices/license-slice.js'
import currentFontReducer from './slices/current-font-slice.js'
import previewTextReducer from './slices/preview-text-slice.js'

export const store = configureStore({
  reducer: {
    fonts: fontReducer,
    licenses: licenseReducer,
    currentFont: currentFontReducer,
    previewTexts: previewTextReducer,
  },
})
