import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Estimator extends Component {
  
  static propTypes = {
    features: PropTypes.object,
    footage: PropTypes.number,
    service: PropTypes.string,
    express: PropTypes.string
  };

  render(){

    let totalCost = 0;

    let featureList = Object.keys(this.props.features).filter(key => {
      if (this.props.features[key]) return key; 
    });

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

    if(this.props.features.eco) totalCost += 10;
    if(this.props.features.seal) totalCost += 40;
    if(this.props.express == "yes") totalCost *= 1.5;

    return(
      <div>
        <h2 id="estimate-title">Estimated Cost Is</h2>
        <p>Service: {this.props.service}</p>
        <p>footage: {this.props.footage}</p>
        <p>features: {featureList.map(feature => (
            <span key={feature}>{feature}, </span>
          ))}</p>
        <p>Express: {this.props.express}</p>
        <p><strong>Total: {totalCost}</strong></p>
      </div>
    );
  }
}

export default Estimator;