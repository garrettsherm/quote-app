import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Services from './Services';
import HouseSize from './HouseSize';
import Features from './Features';
import Express from './Express';
import './AppForm.css';

class AppForm extends Component {

  static propTypes = {
    service: PropTypes.string,
    serviceChange: PropTypes.func,
    footageChange: PropTypes.func,
    features: PropTypes.object,
    footage: PropTypes.number,
    addFeature: PropTypes.func,
    express: PropTypes.string,
    expressChange: PropTypes.func,
    step: PropTypes.number
  };

  render(){
    return(
      <div className="container-fluid">
        <div className="row-fluid">
          <div id="appform-container" className="col-12">
            {this.props.step >= 1 && <Services service={this.props.service} serviceChange={this.props.serviceChange} />}
            {this.props.step >= 2 && <HouseSize footage={this.props.footage} footageChange={this.props.footageChange} />}
            {this.props.step >= 3 && <Features features={this.props.features} addFeature={this.props.addFeature} />}
            {this.props.step >= 3 && <Express express={this.props.express} expressChange={this.props.expressChange} />}
          </div>
        </div>
      </div>
    );
  }
}

export default AppForm;