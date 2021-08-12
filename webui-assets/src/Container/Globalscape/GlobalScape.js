import React, { Fragment } from "react";

import EventList from "./EventList.js";

export default class GlobalScape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    }
  }

  updateStep(step){
    this.setState({currentStep:step})
  }

  render() {
    return (
      <Fragment>
        {this.state.currentStep === 0 && 
        (<div className="container-lg w-100 p-3 borderStyle mb-5">
          <div className="row mx-1">
            <div className="col service-tile-content m-1 borderStyle p-2 text-left">              
              <div className="titles" onClick={()=>this.updateStep(1)} >EVENT MANAGEMENT</div>           
            </div>
            <div className="col service-tile-content m-1 borderStyle p-2 text-left">              
              <div className="titles" onClick={()=>this.updateStep()} >Delegate priviledges to SSO</div>           
            </div>
            <div className="col service-tile-content m-1 borderStyle p-2 text-left">              
              <div className="titles" onClick={()=>this.updateStep(1)} >Revoke SSO</div>           
            </div>
            <div className="col service-tile-content m-1 borderStyle p-2 text-left">              
              <div className="titles" onClick={()=>this.updateStep()} >Enable Account /Disable Account</div>           
            </div>
           </div>
        </div>)}
        {this.state.currentStep === 1 &&  
          (<EventList/>)
         }   
        


    
      </Fragment>
    );
  }
}
