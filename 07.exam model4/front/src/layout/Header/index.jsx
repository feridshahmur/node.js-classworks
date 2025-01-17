import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './index.scss'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="logo">
            <h1>COLO<span style={{ color: "red" }}>SHOP</span></h1>
          </div>
          <nav>
            <ul>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/add"}>Add Product</NavLink></li>
              <li><NavLink to={"/wishlist"}>Favourites</NavLink></li>
            </ul>
          </nav>
          <div className="icons">
          <FaSearch />
          <FaUserAlt />
          <FaShoppingCart className='cart' />

          </div>
        </div>
      </div>


    </header>
  )
}

export default Header