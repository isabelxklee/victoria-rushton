import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const currentFontSlice = createSlice({
  name: 'currentFont',
  initialState,
  reducers: {
    addCurrentFont: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {addCurrentFont} = currentFontSlice.actions

export default currentFontSlice.reducer
