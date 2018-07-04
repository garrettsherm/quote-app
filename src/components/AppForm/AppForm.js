import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Services from './Services';
import HouseSize from './HouseSize';
import Features from './Features';
import Express from './Express';
import { TransitionGroup, CSSTransition } from "react-transition-group";
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

    let houseEl = null;

    if(this.props.step >= 2){
      houseEl = <HouseSize key="footage-form" footage={this.props.footage} footageChange={this.props.footageChange} />;
    }

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