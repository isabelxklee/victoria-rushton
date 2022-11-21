import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const licenseSlice = createSlice({
  name: 'licenses',
  initialState,
  reducers: {
    addLicenses: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {addLicenses} = licenseSlice.actions

export default licenseSlice.reducer
