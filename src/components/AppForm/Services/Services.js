// Node Modules
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Services.css'

// Service form component
const Services = (props) => (
	<div className="form-section">
    <h4>What Services Do you Require?</h4>
    <div className="form-group">
	    <div className="form-check form-check-inline">
	      <input 
	      	className="form-check-input"
	        type="radio" 
	        name="service" 
	        value="interior" 
	        checked={props.service === "interior"}
	        onChange={props.serviceChange}
	      />
	      <label className="form-check-label">Interior Only</label>
	    </div>
	    <div className="form-check form-check-inline">
	      <input 
	      	className="form-check-input"
	        type="radio" 
	        name="service" 
	        value="exterior" 
	        checked={props.service === "exterior"} 
	        onChange={props.serviceChange}
	      />
	      <label className="form-check-label">Exterior Only</label>
	    </div>
	    <div className="form-check form-check-inline">
	      <input 
	      	className="form-check-input"
	        type="radio" 
	        name="service" 
	        value="both" 
	        checked={props.service === "both"}
	        onChange={props.serviceChange}  
	      />
	      <label className="form-check-label">Interior & Exterior</label>
	    </div>
    </div>	
  </div>
);

// Props this component receives   
Services.propTypes = {
	service: PropTypes.string.isRequired,
  serviceChange: PropTypes.func.isRequired
}

export default Services;