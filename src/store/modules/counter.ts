import { createSlice } from '@reduxjs/toolkit'

interface IState {
  count: number
}

const initialState: IState = {
  count: 0
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
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
