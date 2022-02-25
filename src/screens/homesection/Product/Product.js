import React from 'react';

import './Product.css'
import ShoeImage from '../../../../src/assets/images/shoes.png'
import { Link } from 'react-router-dom';


function Product() {




  return (
   
          <div className="product-page">
            <img src={ShoeImage} className="product-image" alt="item"/>
            <div className="product-details-container" >
                <div className="product-details">
                    <h3>Nike Sneakers</h3>
                    <p>Nike</p>
                </div>
                <p>N5000</p>
            </div>
            <div className="product-description-container" >
                <div className="product-description">
                    <h3>Description</h3>
                    <p>Nike Running shoes , in good conditions....</p>
                </div>
                <p>N5000</p>
            </div>
            <div className="product-condition-container" >
                <h3>Condition</h3>
                <p>Brand New</p>
            </div>
            <div className="product-user-container">
                <img src={ShoeImage} alt="about user" />
                <div className="product-user-container-info">
                    <p>JohnDoe56</p>
                    
                </div>
                <p>See reviews</p>
            </div>

           <Link className="cart-button" to="/cart">
               <p>Add to Cart</p>
           
           </Link>
              

           
          </div>
   
    
  );
}

export default Product;
