import React, { Fragment } from "react";

import CustomCarousel from "../Components/Carousal.js";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceCardDisplay: [],
      firstTimeLoad: [],
      serviceCards: [
        {
          serviceName: "THREAD CONNECT",
          style: {
            display: "block",
          },
          onClick: {
            pageName: "ThreadConnect",
            headerText: "MY THREAD CONNECT SERVICE",
            subHeaderText: this.props.persona,
          },
          img: {
            src: "assets/src/images/Icon-TC.png",
            alt: "TC-Icon",
            style: { width: "87%" },
          },
          serviceInfo: {
            "Subscription Count": 2,
          },
          displayPermissions: {
            displayCard: true,
          },
          buttons: {
            displayButtons: false,
            buttonInfo: [
              {
                buttonName: "Open",
                onClick: "",
              },
              {
                buttonName: "Users",
                onClick: "",
              },
              {
                buttonName: "Api's",
                onClick: "",
              },
              {
                buttonName: "Dashboard",
                onClick: "",
              },
              {
                buttonName: "Remove",
                onClick: "",
              },
              {
                buttonName: "dots",
                onClick: "",
              },
            ],
          },
        },
        {
          serviceName: "ENTERPRISE CONNECT",
          style: {
            display: "block",
          },
          onClick: {
            pageName: "EnterpriseConnect",
            headerText: "MY ENTERPRISE CONNECT SERVICE",
            subHeaderText: this.props.persona,
          },
          img: {
            src: "assets/src/images/Icon-EC.svg",
            alt: "EC-Icon",
            style: { width: "75%" },
          },
          serviceInfo: {
            "Subscription Count": 2,
          },
          displayPermissions: {
            displayCard: true,
          },
          buttons: {
            displayButtons: false,
            buttonInfo: [
              {
                buttonName: "Open",
                onClick: "",
              },
              {
                buttonName: "Users",
                onClick: "",
              },
              {
                buttonName: "Api's",
                onClick: "",
              },
              {
                buttonName: "Dashboard",
                onClick: "",
              },
              {
                buttonName: "Remove",
                onClick: "",
              },
              {
                buttonName: "dots",
                onClick: "",
              },
            ],
          },
        },
        {
          serviceName: "DIVE",
          style: {
            display: "block",
          },
          onClick: {
            pageName: "Dive",
            headerText: "MY DIVE SERVICE",
            subHeaderText: this.props.persona,
          },
          img: {
            src: "assets/src/images/Icon-Dive.svg",
            alt: "Dive-Icon",
            style: "",
          },
          serviceInfo: {
            "Subscription Count": 8,
          },
          displayPermissions: {
            displayCard: true,
          },
          buttons: {
            displayButtons: false,
            buttonInfo: [
              {
                buttonName: "Open",
                onClick: "",
              },
              {
                buttonName: "Users",
                onClick: "",
              },
              {
                buttonName: "Api's",
                onClick: "",
              },
              {
                buttonName: "Dashboard",
                onClick: "",
              },
              {
                buttonName: "Remove",
                onClick: "",
              },
              {
                buttonName: "dots",
                onClick: "",
              },
            ],
          },
        },
        {
          serviceName: "GLOBALSCAPE",
          style: {
            display: "block",
          },
          onClick: {
            pageName: "Globalscape",
            headerText: "MY GLOBALSCAPE SERVICE",
            subHeaderText: this.props.persona,
          },
          img: {
            src: "assets/src/images/Icon-Globalscape.svg",
            alt: "Globalscape Fav",
            style: "",
          },
          serviceInfo: {
            "Subscription Count": 1,
          },
          displayPermissions: {
            displayCard: true,
          },
          buttons: {
            displayButtons: false,
            buttonInfo: [
              {
                buttonName: "Open",
                onClick: "",
              },
              {
                buttonName: "Users",
                onClick: "",
              },
              {
                buttonName: "Api's",
                onClick: "",
              },
              {
                buttonName: "Dashboard",
                onClick: "",
              },
              {
                buttonName: "Remove",
                onClick: "",
              },
              {
                buttonName: "dots",
                onClick: "",
              },
            ],
          },
        },
      ],
    };
  }

  componentDidMount() {
    var serviceNames = [];
    this.state.serviceCards.map((service) => {
      serviceNames.push(service.serviceName);
    });

    this.props.setPersonaHandler(serviceNames);
    let serviceArray = Object.assign([], this.state.serviceCards);
    let tempArr = [];
    let modeRan = serviceArray.length / 3;
    let arrMode =
      serviceArray.length <= 3
        ? serviceArray.length == 3
          ? Math.floor(modeRan) - 1
          : Math.floor(modeRan)
        : Math.ceil(modeRan) - 1;
    console.log("ArrMode: ", arrMode);
    for (var i = 0; i <= arrMode; i++) {
      tempArr[i] = [];
      for (var j = 0; j < 3; j++) {
        if (serviceArray.length > 0) {
          tempArr[i].push(serviceArray[0]);
          serviceArray.splice(0, 1);
        }
      }
    }
    console.log("Temp: ", tempArr);

    setTimeout(() => {
      this.setState({
        serviceCardDisplay: tempArr,
        firstTimeLoad: tempArr,
      });
      console.log("Onmount SrCr: ", this.state.serviceCardDisplay);
      let carouselNode = document.querySelector(".carousel-indicators");
      if (carouselNode != null) {
        carouselNode.classList.add("col-12");
        console.log("FC: ", carouselNode);
      }
    }, 100);
    /*  if(this.state.serviceCardDisplay.length == 1){
      let carouselNode = document.querySelector(".carousel-indicators");
      carouselNode.setAttribute("style","display:none")
    } */
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevprops.persona != this.props.persona) {
      console.log("prev: ", prevprops.persona, "...this: ", this.props.persona);
      let updateServiceCards = Object.assign([], this.state.serviceCards);
      console.log("FirstTimeload: ", this.state.firstTimeLoad);
      let tempCard = [[]];
      updateServiceCards.map((service, index) => {
        if (this.props.persona == service.serviceName) {
          tempCard[0].push(service);
        }
      });
      console.log("TempCard: ", tempCard);
      if (this.props.persona == "GLOBAL") {
        this.setState({
          serviceCardDisplay: this.state.firstTimeLoad,
        });
      } else {
        this.setState({
          serviceCardDisplay: tempCard,
        });
      }

      /* this.setState({
        serviceCardDisplay: tempCard,
      }); */

      console.log(
        "Updated serviceCardDisplay: ",
        this.state.serviceCardDisplay
      );
      /* if(this.state.serviceCardDisplay.length == 1 ){
        let carouselNode = document.querySelector(".carousel-indicators");
        carouselNode.setAttribute("style","display:none")
      }else{
        let carouselNode = document.querySelector(".carousel-indicators");
        carouselNode.setAttribute("style","display:block")
      } */
    }
  }

  render() {
    return (
      <Fragment>
        <div className="container-lg w-100 p-3 borderStyle mb-4">
          <div className="text-center titles mb-3">MY SERVICES</div>
          <CustomCarousel
            serviceCardDisplay={this.state.serviceCardDisplay}
            clickEvent={this.props.clickEvent}
          />
        </div>
        <div className="container-lg w-100 p-3 borderStyle">
          <div className="text-center mb-2">
            <div className="titles">PLANNED OUTAGES</div>
            <div className="d-flex flex-column service-details">
              <div className="text-center para-text my-2">
                March 22, 2021 (04:00 To 05:00 EST) Thread Connect Corporate
                Production will undergo monthly patching activity
              </div>
              <div className="text-center para-text my-2">
                April 8, 2021 (02:00 To 04:00 EST) Enterprise Connect Gateways
                will not be reachable due to planned maintenance activity
              </div>
            </div>
            <div className="border-bottom border-grey border-1 mx-1"></div>
          </div>
          <div className="text-center mb-2">
            <div className="titles">IMPORTANT ANNOUNCEMENTS</div>
            <div className="d-flex flex-column service-details">
              <div className="text-center para-text my-2">
                GE Healthcare Unveils Vscan Air, a New Intuitive, Wireless
                Handheld Ultrasound
              </div>
              <div className="text-center para-text my-2">
                GE Renewable Energy to supply DC-Coupled system to Convergent
                forx 123 MWh hybrid solar plus storage project in Upstatek
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
