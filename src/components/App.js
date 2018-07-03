import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import AppForm from './AppForm';
import Estimator from './Estimator';

class App extends Component {

  constructor(){
    super();
    this.state = {
      service: '',
      footage: 0,
      features: {
        eco: false,
        seal: false
      },
      express: 'no',
      step: 1
    }

    this.handleServiceChange = this.handleServiceChange.bind(this);
    this.handleFootageChange = this.handleFootageChange.bind(this);
    this.handleAddFeature = this.handleAddFeature.bind(this);
    this.handleExpressChange = this.handleExpressChange.bind(this);
  }

  handleServiceChange(e){
    let newStep = this.state.step;
    if ((e.target.value === 'interior' || 
        e.target.value === 'exterior' || 
        e.target.value === 'both') &&
        newStep < 2){
      newStep = 2;
    }
    this.setState({
      service: e.target.value,
      step: newStep
    });
  }

  handleFootageChange(e){
    const newFootage = parseInt(e.target.value);
    let newStep = this.state.step;
    if(newFootage > 500){
      newStep = 3;
    } else {
      newStep = 2;
    }
    this.setState({
      footage: newFootage || 0,
      step: newStep
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
            <div className="col-md-8">
              <AppForm 
                footageChange={this.handleFootageChange} 
                serviceChange={this.handleServiceChange} 
                service={this.state.service}
                features={this.state.features}
                footage={this.state.footage}
                addFeature={this.handleAddFeature}
                express={this.state.express}
                step={this.state.step}
                expressChange={this.handleExpressChange}
              />
            </div>
            <div className="col-md-4">
              <Estimator 
                service={this.state.service} 
                footage={this.state.footage} 
                features={this.state.features}
                express={this.state.express}  
                step={this.state.step}
              />
            </div>        
          </div>
        </div>   
      </div>
    );
  }
}

export default App;
