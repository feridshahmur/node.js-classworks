import React from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <header>
     
      <nav>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
        
        
          <li><NavLink to={"/add"}>Add Meals</NavLink></li>
          <li><NavLink to={"/favs"}>Favourites</NavLink></li>
        </ul>
      </nav>
      <h1>Book a table for yourself at a time convenient for you</h1>
    </header>
  )
}

export default Header