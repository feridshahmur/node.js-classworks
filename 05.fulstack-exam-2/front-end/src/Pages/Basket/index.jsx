import React, { useContext } from 'react'
import { FavouriteContext } from '../../context/FavouriteContext'
import { FaRegHeart } from "react-icons/fa";
const Basket = () => {
  const {wishlist , toggleWishlist} = useContext(FavouriteContext)

  return (
   
    <div>
       <div>
            <div className="container">
              <div className="cards">
                
                <div className="row">
                  {
                    wishlist && wishlist.map((p) => {
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
                              <FaRegHeart onClick={()=>{toggleWishlist(p)}}/>
      
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
    </div>
  )
}

export default Basket