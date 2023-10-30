import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './modules/counter'
import peopleReducer from './modules/people'
const store = configureStore({
  reducer: {
    counter: counterReducer,
    people: peopleReducer
  }
})
// 定义state类型
type GetStateType = typeof store.getState
export type StateReturnType = ReturnType<GetStateType>

type DispatchType = typeof store.dispatch
export type DispatchReturnType = ReturnType<DispatchType>

export default store
