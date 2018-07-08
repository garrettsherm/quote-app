// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Estimator.css';

class Estimator extends Component {
  
  // Props this component receives 
  static propTypes = {
    features: PropTypes.object.isRequired,
    footage: PropTypes.number.isRequired,
    service: PropTypes.string.isRequired,
    express: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired
  };

  render(){

    // Calculate total before rendering
    // start at total = 0
    let totalCost = 0;

    // Get list of all keys in features object prop
    let featureList = Object.keys(this.props.features).filter(key => {
      if (this.props.features[key]) return key; 
      return null;
    });

    // if no features then put default = none
    if(featureList.length === 0){
      featureList.push('none');
    }

    // Check for service selection
    // total = footage * service price 
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

    // If additional features selected add cost to total
    if(this.props.features.eco) totalCost += 10;
    if(this.props.features.seal) totalCost += 40;
    if(this.props.express === "yes") totalCost *= 1.5;

    // Format to $X.XX
    const moneyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });

    // Conditional Rendering for step 2 & 3
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