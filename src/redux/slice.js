import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  value: false,
}

export let slice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginTrue: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = true
    },
    loginFalse: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginFalse, loginTrue } = slice.actions

export default slice.reducer