import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="quote-app">
        <header id="title-header" className="mt-3">
          <div className="container">
            <div className="row">
              <h1 className="mx-auto">Window Quote App</h1>
            </div>
          </div>
        </header>
        <div id="app-container" className="container">
          <div className="row">
            <div className="col-8">
                <div className="container-fluid">
                  <div className="row-fluid">
                    <div className="col-12">
                      <h2 id="form-title">Let's begin</h2>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-4">
              <h2 id="estimate-title">Estimated Cost Is</h2>
            </div>         
          </div>
        </div>
      </div>
    );
  }
}

export default App;
