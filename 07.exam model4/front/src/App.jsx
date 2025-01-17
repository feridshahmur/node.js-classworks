import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainHeader from './layout/MainHeader'
import Home from './pages/Home'
import Add from './pages/Add'
import Wishlist from './pages/wishlist'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='add' element={<Add/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
