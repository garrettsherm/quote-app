//Node Modules
import React from 'react';

// Styles
import './Header.css';

//Functional stateless component
// Header title
const Header = () => (
  <header id="title-header">
    <div className="container">
      <div className="row">
        <h1 className="mx-auto">Window Cleaning Quote</h1>
      </div>
      <div className="row">
        <p className="mx-auto">Get an Estimate</p>
      </div>
    </div>
  </header>
);

export default Header;