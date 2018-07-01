import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Features extends Component {

  static propTypes = {
    features: PropTypes.object,
    addFeature: PropTypes.func,
  };

	render(){
		return(
			<div>
		    <h4>Need any additional features?</h4>
		    <div>
		      <label>Eco Friendly Cleaning Solution</label>
		      <input type="checkbox" value="eco-cleaning" checked={this.props.features.eco} onClick={this.props.addFeature} />
		    </div>
		    <div>
		      <label>Window Seal Cleaning</label>
		      <input type="checkbox" value="sealing" checked={this.props.features.seal} onClick={this.props.addFeature} />
		    </div>
		  </div>
		);
	}
}

export default Features;