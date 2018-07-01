import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Services from './Services';
import HouseSize from './HouseSize';
import Features from './Features';
import Express from './Express';

class AppForm extends Component {

  static propTypes = {
    service: PropTypes.string,
    serviceChange: PropTypes.func,
    footageChange: PropTypes.func,
    features: PropTypes.object,
    footage: PropTypes.number,
    addFeature: PropTypes.func,
    express: PropTypes.string,
    expressChange: PropTypes.func
  };

  render(){
    return(
      <div className="container-fluid">
        <div className="row-fluid">
          <div className="col-12">
            <Services service={this.props.service} serviceChange={this.props.serviceChange} />
            <HouseSize footage={this.props.footage} footageChange={this.props.footageChange} />
            <Features features={this.props.features} addFeature={this.props.addFeature} />
            <Express express={this.props.express} expressChange={this.props.expressChange} />
          </div>
        </div>
      </div>
    );
  }
}

export default AppForm;