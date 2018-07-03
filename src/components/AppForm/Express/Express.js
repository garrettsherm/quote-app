import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Express extends Component {

  static propTypes = {
    express: PropTypes.string,
    expressChange: PropTypes.func
  };

	render(){
		return(
			<div className="form-section">
	      <h4>Do you want to pay extra for express cleaning?</h4>
	      <p>Under an hour guaranteed!</p>
		    <div className="form-group">	      
		      <select 
		      className="form-control"
		      value={this.props.express} 
		      onChange={this.props.expressChange}
		      >
		        <option value="no">No</option>
		        <option value="yes">Yes</option>
		      </select>
	      </div>
	    </div>
		);
	}
}

export default Express;