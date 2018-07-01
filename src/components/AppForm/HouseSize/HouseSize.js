import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HouseSize extends Component {
  
  static propTypes = {
    footageChange: PropTypes.func,
    footage: PropTypes.number,
  };

	render(){
		return(
	  	<div>
	      <h4>How many squarefeet is your house</h4>
	      <input type="text" value={this.props.footage} name="houseSize" onChange={this.props.footageChange} />
	    </div>
		);
	}
}

export default HouseSize;