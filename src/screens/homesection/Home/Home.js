import React from 'react';

import './Home.css'
import ShoeImage from '../../../../src/assets/images/shoes.png'
import { Link } from 'react-router-dom';


function Home() {




  return (
   
          <div className="home-page">
          
            <div className="header">
                <h1>Discover</h1>
            </div>
            <p className="welcome-text"> Find the best deals and prices</p>
           <div className="category-container">
               <div className="category-card">
                   <p>Men's Wear</p>
               </div>
                <div className="category-card">
                   <p>Men's Wear</p>
               </div>
                <div className="category-card">
                   <p>Men's Wear</p>
               </div>
                
               
           </div>
        {/* product container */}
           <div className="product-container">
               <div className="product-container-header">
                <h1>Popular Deals</h1>
                <p>View All</p>
               </div>

               <div className="product-card-container">
                   {/* product card */}
                   
                   <Link to="/product"><div className="product-card">
                        <img  
                         alt="product-card"   
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike Sneaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div></Link>
                    {/* end of product card */}
                    {/* product card */}
                   
                   <Link to="/product"><div className="product-card">
                        <img  
                         alt="product-card"   
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike Sneaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div></Link>
                    {/* end of product card */}
                    {/* product card */}
                   
                   <Link to="/product"><div className="product-card">
                        <img  
                         alt="product-card"   
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike Sneaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div></Link>
                    {/* end of product card */}
               </div>
               
           </div>
           {/* end of product container */}
              

                     {/* product container */}
           <div className="product-container">
               <div className="product-container-header">
                <h1>Christmas Deals</h1>
                <p>View All</p>
               </div>

               <div className="product-card-container">
                   {/* product card */}
                   
                   <Link to="/product"><div className="product-card">
                        <img  
                         alt="product-card"   
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike Sneaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div></Link>
                    {/* end of product card */}
                    {/* product card */}
                   
                   <Link to="/product"><div className="product-card">
                        <img  
                         alt="product-card"   
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike Sneaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div></Link>
                    {/* end of product card */}
                    {/* product card */}
                   
                   <Link to="/product"><div className="product-card">
                        <img  
                         alt="product-card"   
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike Sneaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div></Link>
                    {/* end of product card */}
               </div>
               
           </div>
           {/* end of product container */}

                   {/* product container */}
           <div className="product-container">
               <div className="product-container-header">
                <h1>Discounted Deals</h1>
                <p>View All</p>
               </div>

               <div className="product-card-container">
                   {/* product card */}
                   
                   <Link to="/product"><div className="product-card">
                        <img  
                         alt="product-card"   
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike Sneaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div></Link>
                    {/* end of product card */}
                   {/* product card */}
                   
                   <Link to="/product"><div className="product-card">
                        <img  
                         alt="product-card"   
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike Sneaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div></Link>
                    {/* end of product card */}
                    {/* product card */}
                   
                   <Link to="/product"><div className="product-card">
                        <img  
                         alt="product-card"   
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike Sneaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div></Link>
                    {/* end of product card */}
               </div>
               
           </div>
           {/* end of product container */}
         
          </div>
   
    
  );
}

export default Home;
