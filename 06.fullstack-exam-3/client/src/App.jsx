import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import MainHeader from './layouts/MainHeader'
import Home from './pages/Home'
import Add from './pages/AddProduct'
import Favourites from './pages/Favourites'
function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>}/>
          <Route path='add' element={<Add/>}/>
          <Route path='favs' element={<Favourites/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
