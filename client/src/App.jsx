import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Initial from './pages/Initial'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Initial/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
