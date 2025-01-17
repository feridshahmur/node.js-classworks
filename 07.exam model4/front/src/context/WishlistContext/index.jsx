import React, { createContext, useState } from 'react'
export const WishlistContext = createContext(null)
const WishlistProvider = ({children}) => {
  const[wishlist , setWishlist] = useState([])
  const toogleWishlist = (product)=>{
    const idx = wishlist.findIndex((w)=>w._id ===product._id )
    if (idx === -1) {
      setWishlist([...wishlist , {...product}])
    }else{
      setWishlist([...wishlist].filter((w)=>w._id !== product._id))
    }
  }
  return (
    <WishlistContext.Provider value={{wishlist , toogleWishlist}}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider