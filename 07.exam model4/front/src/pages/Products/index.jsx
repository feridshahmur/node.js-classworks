import React, { useContext, useEffect, useState } from 'react'
export const BASE_URL = "http://localhost:8080/products"

import axios from 'axios'
import { WishlistContext } from '../../context/WishlistContext'
const Products = () => {
  const [products, setProducts] = useState([])
  const [productsCopy, setProductCopy] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const { toogleWishlist } = useContext(WishlistContext)
  const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(searchQuery.toLocaleLowerCase().trim()))
  const getAllData = async () => {
    try {
      const res = await axios(`${BASE_URL}`)
      setProducts(res.data)
      setProductCopy(res.data)
    } catch (error) {
      console.log(error.message);

    }
  }

  const handleChange = (e) => {
    let sortedProd;
    console.log(e.target.value);
    if (e.target.value === "asc") {
      console.log("a");

      sortedProd = [...products].toSorted((a, b) => a.price - b.price)
    } else if (e.target.value === "desc") {
      console.log("d");

      sortedProd = [...products].toSorted((a, b) => b.price - a.price)
    } else {
      sortedProd = [...productsCopy]
    }
    console.log(sortedProd);

    setProducts([...sortedProd])
  }

  useEffect(() => {
    getAllData()


  }, [])

  return (
    <div>
      <div className="container">
        <h1 style={{ margin: "2rem 0" }}>New Arrivals</h1>

        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <input type="search" placeholder='Search...' onChange={(e) => { setSearchQuery(e.target.value) }} />
          <select onChange={handleChange}>

            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
            <option value="default">DEFAULT</option>


          </select>
        </div>
        <div className="cards">
          <div className="row" style={{ margin: "0 auto" }}>
            {
              products && filteredProducts.map((p) => {
                return (
                  <div className="col-12 col-md-4 col-lg-3" key={p._id}>
                    <div className="products" style={{ textAlign: "center" }}>
                      <img src={p.imageUrl} alt="" style={{ marginBottom: "1.3rem", width: "170px" }} />
                      <h3 style={{ fontSize: "14px" }}>{p.title}</h3>
                      <p style={{ color: "red" }}> <span style={{color:"gray", textDecoration:"line-through"}}>   {p?.old}</span> ${p.price}</p>
                      <button onClick={() => { toogleWishlist(p) }} className='btn btn-danger'>Add To Favourites</button>

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