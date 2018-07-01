import React, { Component } from 'react';

class Estimator extends Component {
  
  render(){

    let totalCost = 0;

    if(this.props.service === 'interior'){
      totalCost = .02 * this.props.footage;
    }
    else if(this.props.service === 'exterior') {
      totalCost = .03 * this.props.footage;
    }
    else if(this.props.service === 'both') {
      totalCost = .05 * this.props.footage;
    }
    else {
      totalCost = 0;
    }

    return(
      <div>
        <h2 id="estimate-title">Estimated Cost Is</h2>
        <p>Service: {this.props.service}</p>
        <p>footage: {this.props.footage}</p>
        <p>Total: {totalCost}</p>
      </div>
    );
  }
}

export default Estimator;