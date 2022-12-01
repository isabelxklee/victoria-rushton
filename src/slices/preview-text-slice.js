import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const previewTextSlice = createSlice({
  name: 'previewTexts',
  initialState,
  reducers: {
    addPreviewTexts: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {addPreviewTexts} = previewTextSlice.actions

export default previewTextSlice.reducer
