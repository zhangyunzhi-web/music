import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { shallowEqual, useDispatch } from 'react-redux'

import routes from './router'
import { useAppSelector } from './store/hooks'
import { decrementAction, incrementAction } from './store/modules/counter'
import Header from './components/header'
import Footer from './components/footer'
// type GetStateType = typeof store.getState
// type StateReturnType = ReturnType<GetStateType>

const App = memo(() => {
  const { count, name } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      name: state.people.name
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  const handleAdd = (num: number) => {
    dispatch(incrementAction(num))
  }
  const handleSub = (num: number) => {
    dispatch(decrementAction(num))
  }
  return (
    <div className="App">
      <Header />
      <h2>当前计数：{count}</h2>
      <h2>当前名字：{name}</h2>
      <button onClick={() => handleAdd(1)}>+</button>
      <button onClick={() => handleSub(-1)}>-</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <Footer />
    </div>
  )
})

export default App
