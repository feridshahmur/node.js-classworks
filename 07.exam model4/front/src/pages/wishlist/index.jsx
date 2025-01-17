import React, { useContext } from 'react';
import { WishlistContext } from '../../context/WishlistContext';
import { Helmet } from 'react-helmet-async';


const Wishlist = () => {
  const { wishlist , toogleWishlist } = useContext(WishlistContext);

  return (
    <div>
       <Helmet>
        <title>Wishlist Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="container">
        <h1 style={{ margin: "2rem 0", textAlign:"center" }}>My Favorites</h1>

        <div className="cards">
          <div className="row" style={{  margin: "0 auto" }}>
            {wishlist.length > 0 ? (
              wishlist.map((p) => (
                <div className="col-12 col-md-4 col-lg-4" key={p._id}>
                  <div className="products" style={{ textAlign: "center" }}>
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      style={{ marginBottom: "1.3rem", width: "170px" }}
                    />
                    <h3 style={{ fontSize: "14px" }}>{p.title}</h3>
                    <p style={{ color: "red" }}>${p.price}</p>
                    <button
                      onClick={() => toogleWishlist(p)}
                      className="btn btn-danger"
                    >
                      Delete From Wishlist
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Your wishlist is currently empty.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
