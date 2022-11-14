import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const fontSlice = createSlice({
  name: 'fonts',
  initialState,
  reducers: {
    addFonts: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {addFonts} = fontSlice.actions

export default fontSlice.reducer
