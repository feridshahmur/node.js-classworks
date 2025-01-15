import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { FaRegHeart } from "react-icons/fa";
import { FavouriteContext } from '../context/FavouriteContext';



export const BASE_URL = "http://localhost:8080/product"

const Products = () => {
  const [products, setProducts] = useState([])
  const [searchQuery , setSerchQuery] = useState("")
  const [sort , setSort] = useState("default")

  const {toggleWishlist} = useContext(FavouriteContext)

   const getAllData = async () => {
    try {
      const res = await axios(`${BASE_URL}`)
      setProducts(res.data)


    } catch (error) {
      console.log(error.message);

    }
  }
  const sortedProducts = products.toSorted((a , b)=>{
    if (sort === "asc") {
      return a.price - b.price
    }else if(sort === "desc"){
      return b.price - a.price
    }
  })
  const filteredProducts = sortedProducts.filter((w) => w.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))
const handleChange = (e)=>{
  setSort(e.target.value)
}


  useEffect(() => {

    getAllData()

  }, [])

  return (
    <div style={{backgroundColor:"rgb(247, 249, 250)"}}>
      <div className="container">
        <h1 style={{textAlign:"center", padding:"3rem"}}>Fwatured Products</h1>
        <div className="cards">
          <div style={{display:"flex" , justifyContent:"space-between", margin:"2em"}}>
          <input type="search" placeholder='search'  onChange={(e)=>{setSerchQuery(e.target.value)}}/>
          <select name="" id=""  onChange={handleChange}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
            <option value="default">DEFAULT</option>
          </select>
          </div>
          <div className="row">
            {
              filteredProducts && filteredProducts.map((p) => {
                return (
                  <div className="col-12 col-lg-3" key={p._id}>
                    <div className="card " style={{ width: "18rem" }}>

                      <img src={p.imageUrl} alt="" />


                      <div className="card-body">
                        <h3>
                          {p.title}
                        </h3>
                        <p>
                          {p.description}
                        </p>
                        <p>
                          ${p.price}
                        </p>
                        <button onClick={()=>{toggleWishlist(p)}}>
                        <FaRegHeart />


                        </button>
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
