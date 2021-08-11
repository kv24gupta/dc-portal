import React from "react";

import { Carousel } from "react-bootstrap";

export default class CarouselItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment().format("DD-MM-YYYY"),
      month: moment().format("MMMM"),
    };
  }

  componentDidMount() {}

  render() {
    return (
      <Carousel interval={3000}>
        {console.log("Carousel called")}
        {this.props.serviceCardDisplay.map((serviceCard, index) => {
          return (
            <Carousel.Item key={index}>
              <div className="row">
                {serviceCard.map((service, index) => {
                  return (
                    <div className="col-sm-4" key={index}>
                      <div className="thumb-wrapper borderStyle p-1">
                        <a
                          className="service-text"
                          href="#"
                          onClick={this.props.clickEvent.bind(this, {
                            pageName: service.onClick.pageName,
                            headerText: service.onClick.headerText,
                            // subHeaderText: this.props.persona,
                          })}
                        >
                          <div className="row mb-2">
                            <div className="col ml-1 titles service-tile-content">
                              {service.serviceName}
                            </div>
                            <div className="col-3 text-center service-tile-content">
                              <img
                                className="img-fluid"
                                src={service.img.src}
                                alt={service.img.alt}
                                style={
                                  typeof service.img.style == "object"
                                    ? service.img.style
                                    : {}
                                }
                              />
                            </div>
                          </div>
                        </a>
                        <div className="row service-details">
                          {Object.entries(service.serviceInfo).map(
                            ([key, value], index) => {
                              return (
                                <div
                                  className="col m-1 service-tile-content"
                                  key={index}
                                >
                                  {key
                                    .replace("$date", this.state.date)
                                    .replace("$month", this.state.month)}
                                  :{" "}
                                  {value == "Healthy $status"
                                    ? "Healthy "
                                    : value == "Restarting $status"
                                    ? "Restarting "
                                    : value}{" "}
                                  {value == "Healthy $status" ? (
                                    <span className="greenDot"></span>
                                  ) : value == "Restarting $status" ? (
                                    <span className="yellowDot"></span>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              );
                            }
                          )}
                        </div>
                        {service.buttons.displayButtons ? (
                          <div className="row carousel-buttons px-3 py-1">
                            {console.log("buttons: ", service.buttons)}
                            {service.buttons.buttonInfo.map(
                              (buttonData, index) => {
                                return (
                                  <button
                                    key={index}
                                    type="button"
                                    class="btn btn-secondary btn-sm"
                                    onClick={
                                      buttonData.onClick != ""
                                        ? buttonData.onClick
                                        : "#"
                                    }
                                  >
                                    {buttonData.buttonName == "Open" ? (
                                      <img
                                        className="img-fluid"
                                        src="assets/src/images/Icon-Open.svg"
                                        alt="Open-Icon"
                                        style={{ width: "25%" }}
                                      />
                                    ) : (
                                      ""
                                    )}
                                    {buttonData.buttonName == "dots"
                                      ? ".  .  ."
                                      : buttonData.buttonName}
                                  </button>
                                );
                              }
                            )}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}
