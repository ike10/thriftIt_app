import React from 'react';
import './VerifyEmail.css';


function VerifyEmail() {




  return (
   
          <div className="Page">
          
            <div className="header">
                <h1>Verify Email</h1>
            </div>
            
            <div className="form">
            <p className="message">Please enter the one time password sent to your email </p>
                <input className="form-input"
                placeholder="One time password"
                type="number"
                />
               

                <div className="normal-button">
                    <p>Verify</p>
                </div>
                
                <div className="form-message">
                    <p>Didn't receive the mail?</p>
                    <a href="/"><p>Resend</p></a>
                </div>
            </div>
            
              
          </div>
   
    
  );
}

export default VerifyEmail;
