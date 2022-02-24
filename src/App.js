import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './screens/authentication/Login/Login';
import CreateAccount from './screens/authentication/CreateAccount/CreateAccount';
import VerifyEmail from './screens/authentication/VerifyEmail/VerifyEmail';
import Home from './screens/homesection/Home/Home';
import Section from './screens/homesection/Section/Section';

function App() {




  return (
   
         <div className="App">
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/verifyemail" element={<VerifyEmail />} />
        <Route path="/home" element={<Home />} />
         <Route path="/section" element={<Section />} />
      </Routes>
    </div>
   
    
  );
}

export default App;
