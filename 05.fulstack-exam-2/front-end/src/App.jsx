import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/Header'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './Pages/Home'

import Add from './Pages/AddProducts'
import ProductDetails from './Pages/ProductDetails'
import Basket from './Pages/Basket'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/:id' element={<ProductDetails/>}/>
        <Route path='add' element={<Add/>}/>
        <Route path='basket' element={<Basket/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
