import React, { Fragment } from "react";
import { Modal, Button } from 'react-bootstrap';


export default class AssignEventToSso extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (  
        <Modal show={this.props.openModal} onHide={this.props.closeModal}>
          <Modal.Header closeBut ton>
            <Modal.Title>Assign SSO</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="form-group row">
              <label className="col-sm-4 col-form-label" htmlFor="gs_eve-name">Event Name*</label>
              <div className="col-sm-8"><i className="fa fa-user icon"></i>
                <input className="form-control form-control-sm" type="text" id="gs_eve-name" name="gs_eve-name" />    </div>
            </p>
            <p className="form-group row">
              <label className="col-sm-4 col-form-label" htmlFor="gs_eve-sso">New SSO ID</label>
              <div className="col-sm-8"><i className="fa fa-user icon"></i>
                <input className="form-control form-control-sm" type="text" id="gs_eve-sso" name="gs_eve-sso" /></div>
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
