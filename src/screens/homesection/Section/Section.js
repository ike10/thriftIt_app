import React from 'react';

import './Section.css'
import ShoeImage from '../../../../src/assets/images/shoes.png'


function Section() {




  return (
   
          <div className="page">
          
            <div className="header">
                <h1>Men's Wear</h1>
            </div>
            <p className="welcome-text"> Find the best deals and prices on men's clothing</p>
           
        {/* product container */}
           <div className="product-section">
               <div className="product-section-header">
                <h1>All Items</h1>
                <p></p>
               </div>

               <div className="product-card-section">
                   {/* product card */}
                    <div className="product-card">
                        <img   
                        alt="product-card" 
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike SNeaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div>
                    {/* product card */}
                    <div className="product-card">
                        <img  
                         alt="product-card"   
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike SNeaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div>
                    {/* product card */}
                    <div className="product-card">
                        <img    
                         alt="product-card" 
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike SNeaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div>

                    {/* product card */}
                    <div className="product-card">
                        <img    
                         alt="product-card" 
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike SNeaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div>
                    {/* product card */}
                    <div className="product-card">
                        <img 
                         alt="product-card"    
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike SNeaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div>
                    {/* product card */}
                    <div className="product-card">
                        <img    
                         alt="product-card" 
                             className="product-card-image"
                            src={ShoeImage}
                             />
                        <div >
                            <p className="product-card-title">Nike SNeaker</p>
                             <p className="product-card-size">XL</p>
                        </div>
                        <p className="product-card-username">JohnDoe56</p>
                        <div >
                            <p className="product-card-brand">Nike</p>
                            <p className="product-card-price">N5000</p>
                        </div>
                    </div>
               </div>
               
           </div>
           {/* end of product container */}
              

           
          </div>
   
    
  );
}

export default Section;
