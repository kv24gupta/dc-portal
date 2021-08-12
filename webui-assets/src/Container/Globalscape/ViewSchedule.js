import React, { Fragment } from "react";
import { Modal, Button } from 'react-bootstrap';


export default class ViewSchedule extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
    
        <Modal show={this.props.openModal} onHide={this.props.closeModal}>
          <Modal.Header closeBu tton>
            <Modal.Title>View Schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="form-group row">
              <label className="col-sm-4 col-form-label" htmlFor="gs_eve-name">Event Name*</label>
              <div className="col-sm-8"><input className="form-control form-control-sm" type="text" id="" name="" value={this.props.eventName} />  </div>
            </p>
            <p className="form-group row">
              <label className="col-sm-4 col-form-label" htmlFor="gs_eve-sso">Schedule</label>
              <div className="col-sm-8" onChange={this.onChangeValue}>
                <div class="radio">
                  <label><input type="radio" name="optradio" checked /> One time only</label>
                </div>
                <div class="radio">
                  <label><input type="radio" name="optradio" /> Daily</label>
                </div>
                <div class="radio">
                  <label><input type="radio" name="optradio" /> Hourly</label>
                </div>
                <div class="radio">
                  <label><input type="radio" name="optradio" /> Monthly</label>
                </div>
                <div class="radio disabled">
                  <label><input type="radio" name="optradio" disabled /> Specific time</label>
                </div>
              </div>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.props.closeModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

    );
  }
}
