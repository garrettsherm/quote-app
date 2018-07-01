import React, { Component } from 'react';

class AppForm extends Component {

  render(){
    return(
      <div className="container-fluid">
        <div className="row-fluid">

          <div className="col-12">
            <h4>What Services Do you Require</h4>
            <form>
              <div className="">
                <label>Interior Only</label>
                <input 
                  type="radio" 
                  name="service" 
                  value="interior" 
                  checked={this.props.service === "interior"}
                  onChange={this.props.serviceChange}
                />
              </div>
              <div className="">
                <label>Exterior Only</label>
                <input 
                  type="radio" 
                  name="service" 
                  value="exterior" 
                  checked={this.props.service === "exterior"} 
                  onChange={this.props.serviceChange}
                />
              </div>
              <div className="">
                <label>Interior & Exterior</label>
                <input 
                  type="radio" 
                  name="service" 
                  value="both" 
                  checked={this.props.service === "both"}
                  onChange={this.props.serviceChange}  
                />
              </div>
              <div>
                <h4>How many squarefeet is your house</h4>
                <input type="text" name="houseSize" onChange={this.props.footageChange} />
              </div>
            </form>
          </div>

          <div className="col-12">

          </div>

        </div>
      </div>
    );
  }
}

export default AppForm;