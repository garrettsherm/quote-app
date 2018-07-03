import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Services.css'

class Services extends Component {

  static propTypes = {
    service: PropTypes.string,
    serviceChange: PropTypes.func
  };

	render(){
		return(
			<div className="form-section">
		    <h4>What Services Do you Require</h4>
		    <div className="form-group">
			    <div className="form-check form-check-inline">
			      <input 
			      	className="form-check-input"
			        type="radio" 
			        name="service" 
			        value="interior" 
			        checked={this.props.service === "interior"}
			        onChange={this.props.serviceChange}
			      />
			      <label className="form-check-label">Interior Only</label>
			    </div>
			    <div className="form-check form-check-inline">
			      <input 
			      	className="form-check-input"
			        type="radio" 
			        name="service" 
			        value="exterior" 
			        checked={this.props.service === "exterior"} 
			        onChange={this.props.serviceChange}
			      />
			      <label className="form-check-label">Exterior Only</label>
			    </div>
			    <div className="form-check form-check-inline">
			      <input 
			      	className="form-check-input"
			        type="radio" 
			        name="service" 
			        value="both" 
			        checked={this.props.service === "both"}
			        onChange={this.props.serviceChange}  
			      />
			      <label className="form-check-label">Interior & Exterior</label>
			    </div>
		    </div>	
	    </div>
		);
	}
};

export default Services;