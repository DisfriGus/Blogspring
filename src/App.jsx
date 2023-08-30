import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Main from './Pages/Main'
import Blog from './Pages/Blog'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div><Main/></div>}/>
        <Route path='/Blog' element={<div><Blog/></div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App