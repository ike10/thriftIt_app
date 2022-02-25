import React from 'react';
import { Link } from 'react-router-dom';

import './CreateAccount.css'



function CreateAccount() {




  return (
   
          <div className="Page">
          
            <div className="header">
                <h1>Create Account</h1>
            </div>

            <div className="form">
                <input className="form-input"
                placeholder="Email"
                type="email"
                />
                <input className="form-input"
                placeholder="Password"
                type="password"
                />
                <input className="form-input"
                placeholder="Confirm Password"
                type="password"
                />

                <Link to="/verifyemail"><div className="signup-button">
                    <p>Sign Up</p>
                </div></Link>
                <div className="signup-google-button">
                    <p>SIgn Up With Google</p>
                </div>
                <div className="form-message">
                    <p>Already have an account?</p>
                    <Link to="/"><a href="/"><p>Sign here</p></a></Link>
                </div>
            </div>
            
              
          </div>
   
    
  );
}

export default CreateAccount;
