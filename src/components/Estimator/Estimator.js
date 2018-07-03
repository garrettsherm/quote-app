import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Estimator.css';

class Estimator extends Component {
  
  static propTypes = {
    features: PropTypes.object,
    footage: PropTypes.number,
    service: PropTypes.string,
    express: PropTypes.string,
    step: PropTypes.number
  };

  render(){

    let totalCost = 0;

    let featureList = Object.keys(this.props.features).filter(key => {
      if (this.props.features[key]) return key; 
    });

    if(featureList.length === 0){
      featureList.push('none');
    }

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

    const moneyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    return(
      <div className="container-fluid">
        <div className="row-fluid">
          <div id="estimator-container" className="form-section">
            <h2 id="estimate-title">Estimated Cost Is</h2>
            <p>Service: {this.props.service}</p>
            {this.props.step >= 2 && <p>footage: {this.props.footage}</p>}
            {this.props.step >= 3 && <p>features: {featureList.map(feature => (
                <span key={feature}>{feature}, </span>
              ))}</p>}
            {this.props.step >= 3 && <p>Express: {this.props.express}</p>}
            <p><strong>Total: {moneyFormat.format(totalCost)}</strong></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Estimator;