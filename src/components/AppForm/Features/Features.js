// Node Modules
import React from 'react';
import PropTypes from 'prop-types';

// Additional Features form component
const Features = (props) => (
	<div className="form-section">
    <h4>Need any additional features?</h4>
    <div className="form-group">
	    <div className="form-check form-check-inline">
	      <input 
	      	className="form-check-input"
					type="checkbox" 
					value="eco-cleaning" 
					checked={props.features.eco} 
					onClick={props.addFeature} 
				/>
	      <label className="form-check-label">Eco Friendly Cleaning Solution</label>
	    </div>
	    <div className="form-check form-check-inline">
	      <input 			 
	      	className="form-check-input"
					type="checkbox" 
					value="sealing" 
					checked={props.features.seal} 
					onClick={props.addFeature} 
				/>
				<label className="form-check-label">Window Seal Cleaning</label>

	    </div>
    </div>
  </div>
);

// Props this component receives   
Features.propTypes = {
  features: PropTypes.object.isRequired,
  addFeature: PropTypes.func.isRequired,
};

export default Features;