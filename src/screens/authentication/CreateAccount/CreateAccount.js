import React from 'react';

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

                <div className="normal-button">
                    <p>Sign In</p>
                </div>
                <div className="bordered-button">
                    <p>Sign in With Google</p>
                </div>
                <div className="form-message">
                    <p>Don't have an account?</p>
                    <a href="/"><p>Sign here</p></a>
                </div>
            </div>
            
              
          </div>
   
    
  );
}

export default CreateAccount;
