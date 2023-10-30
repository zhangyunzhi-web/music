import React, { memo, Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { shallowEqual, useDispatch } from 'react-redux'

import routes from './router'
import { useAppSelector } from './store/hooks'
import { decrementAction, incrementAction } from './store/modules/counter'
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
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数：{count}</h2>
      <h2>当前名字：{name}</h2>
      <button onClick={() => handleAdd(1)}>+</button>
      <button onClick={() => handleSub(-1)}>-</button>
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
})

export default App
