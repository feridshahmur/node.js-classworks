import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import styles from './index.module.scss'
import {NavLink} from 'react-router-dom'



const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.logo}><p>S H O P P E R S</p></div>
          <div className="icons" style={{ display: "flex", gap: "1rem" , color:"gray"}}>
            <div className="user">
              <FaUser />
            </div>
            <div className="heart">
              <FaRegHeart />

            </div>
            <div className="cart">
              <FaShoppingCart />

            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/add"}>Add Product</NavLink>
              
            </li>
            <li>
            <NavLink to={"/basket"}>Basket</NavLink>  
              
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header