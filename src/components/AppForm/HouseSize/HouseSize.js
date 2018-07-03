import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HouseSize extends Component {
  
  static propTypes = {
    footageChange: PropTypes.func,
    footage: PropTypes.number,
  };

	render(){
		return(
			<div className="form-section">
	      <h4>How many squarefeet is your house</h4>
	      <div className="form-group">
	      	<input 
	      		className="form-control" 
	      		type="text" 
	      		value={this.props.footage} 
	      		name="houseSize" 
	      		onChange={this.props.footageChange} 
	      	/>
	    	</div>
	    </div>
		);
	}
}

export default HouseSize;