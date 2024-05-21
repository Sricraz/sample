// Navbar.js

import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import './Navbar.css';


function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><About to="/">Home</About></li>
        <li><Contact to="/about">About</Contact></li>
        <li><Home to="/contact">Contact</Home></li>
      </ul>
      <hr />
    </div> 
     );
}

export default Navbar;


