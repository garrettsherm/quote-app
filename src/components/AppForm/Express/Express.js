import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Express extends Component {

  static propTypes = {
    express: PropTypes.string,
    expressChange: PropTypes.func
  };

	render(){
		return(
	 		<div>
	      <h4>Do you want to pay extra for express cleaning?</h4>
	      <p>Under an hour guaranteed!</p>
	      <select value={this.props.express} onChange={this.props.expressChange}>
	        <option value="no">No</option>
	        <option value="yes">Yes</option>
	      </select>
	    </div>
		);
	}
}

export default Express;