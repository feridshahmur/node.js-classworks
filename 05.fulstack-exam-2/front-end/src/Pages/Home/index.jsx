import React from 'react'
import Products from '../../Products'
import styles from './index.module.scss'

const Home = () => {
  return (
    <>
    <section id={styles.home}>
      <div className="container">
        <div className={styles.acces}>
          <div className="row">
            <div className="col-12 col-md-6">
                  <img style={{maxHeight:"50vh" , objectFit:'cover'}} src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" alt="" />
            </div>
            <div className="col-12 col-md-6">
                <div className={styles.homeinfo}>
                  <h1>
                  Finding Your Perfect Shoes
                  </h1>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                  </p>
                  <button>
                    S H O P  N O W
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      
    </section>
    <Products />
    </>
    
    
    
  )
}

export default Home