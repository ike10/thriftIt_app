import React from 'react';

import './Login.css'



function Login() {




  return (
   
          <div className="page">
          
            <div className="header">
                <h1>Welcome Back</h1>
            </div>

            <div className="login-form">
                <input className="form-input"
                placeholder="Email"
                type="email"
                />
                <input className="form-input"
                placeholder="Password"
                type="password"
                />

                <div className="login-button">
                    <p>Sign In</p>
                </div>
                <div className="google-button">
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

export default Login;
