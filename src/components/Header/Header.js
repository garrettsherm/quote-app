import React, { Component } from 'react';

class Header extends Component {
  render(){
    return(
      <header id="title-header" className="mt-3">
        <div className="container">
          <div className="row">
            <h1 className="mx-auto">Window Quote App</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;