import React, { Fragment } from "react";

import ViewSchedule from "./ViewSchedule.js";
import AssignEventToSso from "./AssignEventToSso.js";
import Enable from "./Enable.js";
import Disable from "./Disable.js";
import RunNow from "./RunNow.js";

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showSso: false,
      showEnable:false,
      showDisable:false,
      showRunNow:false,
      selectedEventName: "",
      eventsData: [{
        eventname: "ABC_123",
        ssoID: "122344",
      },
      {
        eventname: "Event_GHI_789_",
        ssoID: "122344",
      },
      {
        eventname: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m",
        ssoID: "122344",
      },
      {
        eventname: "Event_ABC_123_",
        ssoID: "122344",
      },
      {
        eventname: "Event_GHI_789_",
        ssoID: "122344",
      }]
    }
    this.closeModal = this.closeModal.bind(this);

  }



  viewScheduleFun(eventname) {
    this.setState({
      showModal: true,
      selectedEventName: eventname
    })
  }

  closeModal() {
    console.log('in close modal', this);
    this.setState({
      showModal: false,
      showSso: false,
      showEnable:false,
      showDisable:false,
      showRunNow:false,
    })
  }
  assignSsoFun(eventname){
    this.setState({
      showSso: true,
      // selectedEventName: eventname
    })
  }
  showEnableFun(eventname){
    this.setState({
      showSso: true,
      // selectedEventName: eventname
    })
  }
  showDisableFun(eventname){
    this.setState({
      showSso: true,
      // selectedEventName: eventname
    })
  }
  showRunNowFun(eventname){
    this.setState({
      showSso: true,
      // selectedEventName: eventname
    })
  }


  render() {
    return (
      <Fragment>
        <div className="container-lg w-100 p-3 borderStyle mb-5">
          <div className="text-left titles mb-3">Event Name ( 100+ Character long )</div>
          <table id="gs_event-table" className="table">
            <tbody>
              {this.state.eventsData.map(({ eventname }, index) => {
                return (<tr key={index}>
                  <td><input type="checkbox" id="globalCheckCox" name="gsCheck" value="" /></td>
                  <td className="gs_event-col">{eventname}</td>
                  <td><button className="btn btn-primary" onClick={()=> this.showEnableFun(eventname)}>Enable</button> 
                  <button className="btn btn-primary" onClick={()=> this.showDisableFun(eventname)}>Disable</button> </td>

                  <td><button className="btn btn-primary" >Run Now</button> </td>
                  <td><button className="btn btn-primary" onClick={() => this.viewScheduleFun(eventname)}>View Schedule</button></td>
                  <td><button className="btn btn-primary" onClick={() => this.assignSsoFun(eventname)}>assign SSO</button></td>
                </tr>)
              })}
            </tbody>
          </table>
          {this.state.showModal && <ViewSchedule openModal={this.state.showModal} closeModal={this.closeModal} eventName={this.state.selectedEventName} />}
          {this.state.showSso && <AssignEventToSso openModal={this.state.showSso} closeModal={this.closeModal}  />}

          {this.state.showModal && <Enable openModal={this.state.showModal} closeModal={this.closeModal} eventName={this.state.selectedEventName} />}
          {this.state.showSso && <Disable openModal={this.state.showSso} closeModal={this.closeModal}  />}
        </div>







      </Fragment>
    );
  }
}
