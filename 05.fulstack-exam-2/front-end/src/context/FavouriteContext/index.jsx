import React, { createContext, useState } from 'react'
export const FavouriteContext = createContext(null)

 const FavouriteProvider = ({children}) => {
  const [wishlist , setWishlist] = useState([])
  const toggleWishlist = (product) => {
    const idx = wishlist.findIndex((q) => q._id === product._id)
    if (idx === -1) {
        setWishlist([...wishlist, { ...product }])
    } else {
        setWishlist([...wishlist].filter((q) => q._id !== product._id))
    }
}
  return (
    <FavouriteContext.Provider value={{wishlist , toggleWishlist}}>{children}</FavouriteContext.Provider>
  )
}

export default FavouriteProvider