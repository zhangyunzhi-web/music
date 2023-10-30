import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    incrementAction: (state, { payload }) => {
      state.count = payload + state.count
    },
    decrementAction: (state, { payload }) => {
      state.count = payload + state.count
    }
  }
})
export const { incrementAction, decrementAction } = counterSlice.actions
export default counterSlice.reducer
