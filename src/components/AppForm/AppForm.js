// Node Modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Components
import Services from './Services';
import HouseSize from './HouseSize';
import Features from './Features';
import Express from './Express';

// Styles
import './AppForm.css';

// Render form component for window cleaning app
class AppForm extends Component {

  // Props this component receives   
  static propTypes = {
    service: PropTypes.string.isRequired,
    serviceChange: PropTypes.func.isRequired,
    footageChange: PropTypes.func.isRequired,
    features: PropTypes.object.isRequired,
    footage: PropTypes.number.isRequired,
    addFeature: PropTypes.func.isRequired,
    express: PropTypes.string.isRequired,
    expressChange: PropTypes.func.isRequired,
    step: PropTypes.number.isRequired
  };

  // conditionally render HouseSize, Features, & Express components
  //TransitionGroup & CSSTransition are used for animations
  render(){
    return(
      <div className="container-fluid">
        <div className="row-fluid">
          <div id="appform-container" className="col-12">

            <Services key="service-form" service={this.props.service} serviceChange={this.props.serviceChange} />

            <TransitionGroup component="span" className="fady">
              {this.props.step >= 2 && 
                <CSSTransition classNames="fady" key="fady-transition-2" timeout={{ enter: 500, exit: 500 }} >
                  <HouseSize key="footage-form" footage={this.props.footage} footageChange={this.props.footageChange} />
                </CSSTransition>
              }

              {this.props.step >= 3 &&
                <CSSTransition classNames="fady" key="fady-transition-3" timeout={{ enter: 500, exit: 500 }} >
                  <Features key="features-form" features={this.props.features} addFeature={this.props.addFeature} />
                </CSSTransition>

              }
              {this.props.step >= 3 && 
                <CSSTransition classNames="fady" key="fady-transition-4" timeout={{ enter: 500, exit: 500 }} >
                  <Express key="express-form" express={this.props.express} expressChange={this.props.expressChange} />
                </CSSTransition>

              }
            </TransitionGroup>

          </div>
        </div>
      </div>
    );
  }
}

export default AppForm;