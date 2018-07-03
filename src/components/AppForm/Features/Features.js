import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Features extends Component {

  static propTypes = {
    features: PropTypes.object,
    addFeature: PropTypes.func,
  };

	render(){
		return(
			<div className="form-section">
		    <h4>Need any additional features?</h4>
		    <div className="form-group">
			    <div className="form-check form-check-inline">
			      <input 
			      	className="form-check-input"
							type="checkbox" 
							value="eco-cleaning" 
							checked={this.props.features.eco} 
							onClick={this.props.addFeature} 
						/>
			      <label className="form-check-label">Eco Friendly Cleaning Solution</label>
			    </div>
			    <div className="form-check form-check-inline">
			      <input 			 
			      	className="form-check-input"
							type="checkbox" 
							value="sealing" 
							checked={this.props.features.seal} 
							onClick={this.props.addFeature} 
						/>
						<label className="form-check-label">Window Seal Cleaning</label>

			    </div>
		    </div>
		  </div>
		);
	}
}

export default Features;