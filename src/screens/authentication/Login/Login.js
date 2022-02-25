import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css'



function Login() {




  return (
   
          <div className="login-page">
          
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

                <Link to="/home"><div className="login-button">
                    <p>Sign In</p>
                </div></Link>
                <div className="google-button">
                    <p>Sign in With Google</p>
                </div>
                <div className="form-message">
                    <p>Don't have an account?</p>
                    <Link to="/createaccount"><a href="/"><p>Sign here</p></a></Link>
                </div>
            </div>
            
              
          </div>
   
    
  );
}

export default Login;
