// Node Modules
import React from 'react';
import PropTypes from 'prop-types';

// House Size form component (squared footage)
const HouseSize = (props) => (
	<div className="form-section">
    <h4>How many squarefeet is your house?</h4>
    <div className="form-group">
    	<input 
    		className="form-control" 
    		type="text" 
    		value={props.footage} 
    		name="houseSize" 
    		onChange={props.footageChange} 
    	/>
  	</div>
  </div>
);

// Props this component receives   
HouseSize.propTypes = {
  footageChange: PropTypes.func.isRequired,
  footage: PropTypes.number.isRequired,
};

export default HouseSize;