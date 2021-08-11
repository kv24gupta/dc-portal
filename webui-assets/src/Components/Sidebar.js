import React from "react";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-3 p-0" id="sidebar-wrapper">
        <div className="sidebar-heading p-3">
          <div className="d-flex flex-row p-3">
            <div className="col-3 pr-0 GE-Logo">
              <img
                className="img-fluid"
                alt=""
                src="assets/src/images/Logo-GE1.svg"
              />
            </div>
            <div className="col-9 pl-0 portal-name">
              <div className="text-center headers">
                <b>DIGITAL CONNECT</b>
              </div>
              <div className="border-bottom mx-2"></div>
              <div className="text-center user-details pt-1">
                <b>User | GE Corporate</b>
              </div>
            </div>
          </div>
        </div>
        <div className="list-group list-group-flush p-0 mt-2">
          <span className="sidebarMenu">
            <a
              target="_blank"
              href="https://dc-wordpress-ci.digitalconnect.apps.ge.com/"
              className="list-group-item list-group-item-action"
            >
              <img
                className="img-fluid"
                alt=""
                src="assets/src/images/Icon-Products.svg"
              />
              PRODUCTS & SERVICES
            </a>
            {/**onClick={this.props.clickEvent.bind(this, {pageName:'ProductsAndServices', headerText:'Products & Services', subHeaderText:''})} */}
          </span>
          <span className="sidebarMenu">
            <a
              href="#"
              className="list-group-item list-group-item-action"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "Dashboard",
                headerText: "DASHBOARD",
                // subHeaderText: "Persona 1",
              })}
            >
              <img
                className="img-fluid"
                alt=""
                src="assets/src/images/Icon-Dashboard.svg"
              />{" "}
              DASHBOARD
            </a>
          </span>
          <span className="sidebarMenu">
            <a
              href="#"
              className="list-group-item list-group-item-action"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "ManageSubscriptions",
                headerText: "MANAGE SUBSCRIPTIONS",
                // subHeaderText: "Persona 1",
              })}
            >
              <img
                className="img-fluid"
                alt=""
                src="assets/src/images/Icon-Subscriptions.svg"
              />{" "}
              MANAGE SUBSCRIPTIONS
            </a>
          </span>
          {/* <span className="sidebarMenu" >
                  <img className="img-fluid" alt="" src='assets/src/images/Icon-Subscriptions.svg'/>
                  <a href="#" className="list-group-item list-group-item-action">SUBSCRIPTIONS</a>
                </span> */}
          <span className="sidebarMenu">
            <a
              href="#"
              className="list-group-item list-group-item-action"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "AnnouncementsAndEvents",
                headerText: "ANNOUNCEMENTS & EVENTS",
                // subHeaderText: "Persona 1",
              })}
            >
              <img
                className="img-fluid"
                alt=""
                src="assets/src/images/Icon-Announcements-Events.svg"
              />{" "}
              ANNOUNCEMENTS & EVENTS
            </a>
          </span>
          <span className="sidebarMenu">
            <a href="#" className="list-group-item list-group-item-action">
              <img
                className="img-fluid"
                alt=""
                src="assets/src/images/Icon-Engagement-Requests.svg"
              />{" "}
              ENGAGEMENT REQUESTS
            </a>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={this.props.clickEvent.bind(this, {
                  pageName: "NewEngagementRequest",
                  headerText: "NEW ENGAGEMENT REQUEST",
                  // subHeaderText: "Persona 1",
                })}
              >
                NEW ENGAGEMENT REQUEST
              </a>
              <a href="#">ENHANCEMENT REQUEST</a>
            </div>
          </span>
          <span className="sidebarMenu">
            <a
              href="#"
              className="list-group-item list-group-item-action"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "Support",
                headerText: "SUPPORT",
                // subHeaderText: "Persona 1",
              })}
            >
              <img
                className="img-fluid"
                alt=""
                src="assets/src/images/Icon-Support.svg"
              />{" "}
              SUPPORT
            </a>
          </span>
          <span className="sidebarMenu">
            <a
              href="#"
              className="list-group-item list-group-item-action"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "Preferences",
                headerText: "PREFERENCES",
                // subHeaderText: "Persona 1",
              })}
            >
              <img
                className="img-fluid"
                alt=""
                src="assets/src/images/Icon-Settings.svg"
              />{" "}
              PREFERENCES
            </a>
          </span>
          <span className="sidebarMenu">
            <a
              href="#"
              className="list-group-item list-group-item-action"
              onClick={this.props.clickEvent.bind(this, {
                pageName: "Administration",
                headerText: "ADMINISTRATION",
                // subHeaderText: "Persona 1",
              })}
            >
              <img
                className="img-fluid"
                alt=""
                src="assets/src/images/Icon-Administration.svg"
              />{" "}
              ADMINISTRATION
            </a>
            <div className="dropdown-content">
              <a
                href="#"
                onClick={this.props.clickEvent.bind(this, {
                  pageName: "UserManagement",
                  headerText: "USER MANAGEMENT",
                  // subHeaderText: "Persona 1",
                })}
              >
                USER MANAGEMENT
              </a>
            </div>
          </span>
        </div>
        <div className="col-3 footer">
          <div className="social-media text-center page-footer">
            <div className="social-tag text-muted">Socialize With Us</div>
            <img
              alt=""
              className="img-fluid px-2"
              src="assets/src/images/Icon-Github.svg"
            />
            <img
              alt=""
              className="img-fluid px-2"
              src="assets/src/images/Icon-Yammer.svg"
            />
            <img
              alt=""
              className="img-fluid px-2"
              src="assets/src/images/Icon-Confluence.svg"
            />
          </div>
          <div className="footer-copyright text-center text-muted mt-2">
            © 2021 GENERAL ELECTRIC
          </div>
        </div>
      </div>
    );
  }
}
