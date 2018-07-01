import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Services extends Component {

  static propTypes = {
    service: PropTypes.string,
    serviceChange: PropTypes.func
  };

	render(){
		return(
			<div>
		    <h4>What Services Do you Require</h4>
		    <div className="">
		      <label>Interior Only</label>
		      <input 
		        type="radio" 
		        name="service" 
		        value="interior" 
		        checked={this.props.service === "interior"}
		        onChange={this.props.serviceChange}
		      />
		    </div>
		    <div className="">
		      <label>Exterior Only</label>
		      <input 
		        type="radio" 
		        name="service" 
		        value="exterior" 
		        checked={this.props.service === "exterior"} 
		        onChange={this.props.serviceChange}
		      />
		    </div>
		    <div className="">
		      <label>Interior & Exterior</label>
		      <input 
		        type="radio" 
		        name="service" 
		        value="both" 
		        checked={this.props.service === "both"}
		        onChange={this.props.serviceChange}  
		      />
		    </div>	
	    </div>
		);
	}
};

export default Services;