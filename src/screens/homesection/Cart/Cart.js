import React from 'react';

import './Cart.css'
import ShoeImage from '../../../../src/assets/images/shoes.png'


function Cart() {




  return (
   
          <div className="cart-page">
          <nav className="cart-page-header">
                <p>Back</p>
                <h3>Your Cart</h3>
                <p>Share</p>
          </nav>
         <p className="cart-message">You have 2 items in your cart</p>
           <div className="cart-button">
               <p>Checkout</p>
           </div>
           <div className="cart-container">
           {/* card card */}
               <div className="cart-card">
                    <img alt="cart-info" src={ShoeImage} className="cart-card-image"/>
                    <div className="cart-card-info">
                        <h3>Nike Sneakers</h3>
                        <h4>JohnDoe56</h4>
                        <p>N 5000</p>
                    </div>
               </div>

            {/* end of cart card */}
             {/* card card */}
               <div className="cart-card">
                    <img alt="cart-info" src={ShoeImage} className="cart-card-image"/>
                    <div className="cart-card-info">
                        <h3>Nike Sneakers</h3>
                        <h4>JohnDoe56</h4>
                        <p>N 5000</p>
                    </div>
               </div>

            {/* end of cart card */}
           </div>

           <div className="cart-price-container">
                <div className="cart-price-card">
                    <h4>Items</h4>
                    <p>N10000</p>
                </div>
                <div className="cart-price-card">
                    <h4>Discount</h4>
                    <p>0%</p>
                </div>
                <div className="cart-price-card">
                    <h4>Total</h4>
                    <p>N10000</p>
                </div>
           </div>
              

           
          </div>
   
    
  );
}

export default Cart;
