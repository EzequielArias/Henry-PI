import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Initial from './pages/Initial'
import Home from './pages/Home'
import Detail from './pages/Detail/Detail'
import RecipeForm from './pages/RecipeForm/RecipeForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Initial/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/home/:id' element={<Detail/>}/>
          <Route path='/home/create' element={<RecipeForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
