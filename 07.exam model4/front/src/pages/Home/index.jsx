import React from 'react'
import './index.scss'
import Products from '../Products'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
     <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    <section id='home'>
        <div className="container">
         <div className="row">
          <div className="col-12 col-md-6">
          <div className="info">
          <p>Spring / Summer Collection 2017</p>
          <h1 style={{fontSize:"72px", paddingBottom:"1rem"}}>Get up to 30% Off New Arrivals</h1>
          <button className='btn btn-danger'>SHOP NOW</button>
         </div>
          </div>
         </div>

        </div>
    </section>
    <section id='components'>
      <div className="container">
        <div className="components">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="first crd" style={{padding:"100px"}}>
                <p>WOMEN'S
                </p>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="second crd" style={{padding:"100px"}}>
                <p>accessories's
                </p>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="third crd" style={{padding:"100px"}}>
                <p>men's
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Products/>
    <section id='seller'>
      <div className="container">
        <h1>Best Sellers</h1>
        <div className='cards'>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" alt="" />
                  <h4>
                  Fujifilm X100T 16 MP Digital Camera (Silver)
                  </h4>
                  <p>
                  $520.00
                  </p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img src="https://preview.colorlib.com/theme/coloshop/images/product_2.png" alt="" />
                  <h4>
                  Samsung CF591 Series Curved 27-Inch FHD Monitor
                  </h4>
                  <p>
                  $610.00
                  </p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img src="https://preview.colorlib.com/theme/coloshop/images/product_3.png" alt="" />
                  <h4>
                  Blue Yeti USB Microphone Blackout Edition
                  </h4>
                  <p>
                  $180.00
                  </p>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img src="https://preview.colorlib.com/theme/coloshop/images/product_4.png" alt="" />
                  <h4>
                  DYMO LabelWriter 450 Turbo Thermal Label Printer
                  </h4>
                  <p>
                  $410.00
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id='blogs'>
      <h1>Latest Blogs</h1>
      <div className="container">
        <div className="cards">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg" alt="" />
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" alt="" />
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div className="footer-info">
        <div className="container">
          <div className="row" style={{margin:"0 auto"}}>
            <div className="col-12 col-md-12 col-lg-6">
                <div>Newsletter</div>
                <div><p>Subscribe to our newsletter and get 20% off your first purchase</p></div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
                <input type="text" placeholder='Your email'/>
                <button className='btn-danger'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
    
  )
}

export default Home