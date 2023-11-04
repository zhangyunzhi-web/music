import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from './router'
import Header from './components/header'
import Footer from './components/footer'

const App = memo(() => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <Footer />
    </div>
  )
})

export default App
