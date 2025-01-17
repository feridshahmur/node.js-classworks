import React, { useEffect, useState } from 'react'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
const Products = () => {
  const BASE_URL = "http://localhost:3000/products"
  const [products , setProducts] = useState([])
  const [searchQuery , setSearchQuery] = useState("")


  const getAllData = async()=>{
    try {
      const res = await axios(`${BASE_URL}`)
      console.log(res.data);
      setProducts(res.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  const filteredProducts = products.filter((w) => w.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))
  

  useEffect(() => {
    
  getAllData()
    
  }, [])
  
  return (
    <div id='meals'>
      <div className="container">
        <div className="cards " >
          <div>
            <input type="search" placeholder='Search..'
            style={{padding:"1rem", margin:"2rem 0"}} 
            onChange={(e)=>{setSearchQuery(e.target.value)}}/>
          </div>
          <div className="row">
            {
              products && filteredProducts.map((p)=>{
                return(
                  <div key={p._id} className="col-12 col-md-6 col-lg-6" >
            <div className="card">
            <div className="cardBody">
              <div style={{display:"flex", alignItems:"center", gap:"1rem"}}>
                <img src="https://preview.colorlib.com/theme/tasty/images/dish-3.jpg" alt="" />
              
               <div>
               <div className="name">
                <p>{p.title}</p>
                </div>
                <div className="desc">
                  <p>{p.description}</p>
                </div>
               </div>
              </div>
              
            <div className="price">
              <p>${p.price}</p>
            </div>
            </div>
          </div>
            </div>
                )
              })
            }
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Products