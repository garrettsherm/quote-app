import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AppForm from './AppForm';
import Estimator from './Estimator';

class App extends Component {

  constructor(){
    super();
    this.state = {
      service: 'interior',
      footage: 0,
      features: {
        eco: false,
        seal: false
      },
      express: 'no'
    }

    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleFootageChange = this.handleFootageChange.bind(this);
    this.handleAddFeature = this.handleAddFeature.bind(this);
    this.handleExpressChange = this.handleExpressChange.bind(this);
  }

  handleServiceChange(e){
    this.setState({
      service: e.target.value
    });
  }

  handleFootageChange(e){
    this.setState({
      footage: parseInt(e.target.value) || 0
    });
  }

  handleExpressChange(e){
    this.setState({
      express: e.target.value
    });
  }

  handleAddFeature(e){
    if(e.target.value === 'eco-cleaning'){
      this.setState({
        features: {
          eco: !this.state.features.eco,
          seal: this.state.features.seal
        }
      });
    } 
    else if(e.target.value === 'sealing'){
      this.setState({
        features: {
          eco: this.state.features.eco,
          seal: !this.state.features.seal
        }
      });
    } 
  }
  
  render() {
    return (
      <div className="quote-app">
        <Header />
        <div id="app-container" className="container">
          <div className="row">
            <div className="col-8">
              <AppForm 
                footageChange={this.handleFootageChange} 
                serviceChange={this.handleServiceChange} 
                service={this.state.service}
                features={this.state.features}
                footage={this.state.footage}
                addFeature={this.handleAddFeature}
                express={this.state.express}
                expressChange={this.handleExpressChange}
              />
            </div>
            <div className="col-4">
              <Estimator 
                service={this.state.service} 
                footage={this.state.footage} 
                features={this.state.features}
                express={this.state.express}  
              />
            </div>        
          </div>
        </div>   
      </div>
    );
  }
}

export default App;
