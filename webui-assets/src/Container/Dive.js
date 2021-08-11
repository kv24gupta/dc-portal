import React, { Fragment } from "react";

export default class Dive extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.highChart();
    this.props.setPersonaHandler([]);
  }

  // istanbul ignore next
  highChart() {
    // Create the chart
    Highcharts.chart("container", {
      chart: {
        type: "line",
      },
      title: {
        text: "Usage Statistics",
        style: {
          color: "#005EB8",
          fontWeight: "bolder",
          fontFamily: "GE Inspira Sans !important",
          fontSize: "1.5vw !important",
        },
      },
      // subtitle: {
      //     text: 'Source: WorldClimate.com'
      // },
      xAxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yAxis: {
        // title: {
        //     text: 'GE Power PMXE2E'
        // }
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true,
          },
          enableMouseTracking: false,
        },
      },
      series: [
        {
          name: "GE Power PMXE2E",
          data: [
            7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
          ],
        },
        {
          name: "GE Power",
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        },
      ],
    });
  }

  render() {
    return (
      <Fragment>
        <div className="container-lg w-100 p-3 borderStyle mb-5">
          <div className="row mx-1">
            <div className="col service-tile-content m-1 borderStyle p-2 text-left">
              <div className="titles">SUMMARY</div>
              <div className="row service-details">
                <div className="col service-tile-content">
                  Dashboard Count: 8
                </div>
                <div className="col service-tile-content">
                  Dashboard Status: <span className="greenDot"></span>
                </div>
                <div className="col service-tile-content">
                  Subscription Count: 4
                </div>
                <div className="col service-tile-content">
                  Subscription Status: <span className="redDot"></span>
                </div>
              </div>
            </div>
            <div className="col service-tile-content m-1 borderStyle p-2 text-left">
              <div className="titles">SUBSCRIPTION SUMMARY</div>
              <div className="row service-details g-2">
                <div className="col service-tile-content">
                  Ariba Vendor Onboarding
                </div>
                <div className="col service-tile-content">
                  BMS_Material Master
                </div>
                <div className="col service-tile-content">
                  BMS_Production Order
                </div>
                <div className="col service-tile-content">Goods Receipt</div>
                <div className="col service-tile-content">Purchare Order</div>
                <div className="col service-tile-content">Tech Assignment</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-lg w-100 p-3 borderStyle">
          <div className="row service-text">
            <div className="col-6 service-tile-content mt-2">
              <div className="titles">SUBSCRIPTION SUMMARY</div>
              <ul className="pl-3 service-details">
                <li>
                  <a
                    href="#"
                    onClick={this.props.clickEvent.bind(this, {
                      pageName: "DivePower",
                      headerText: "My Dive Service",
                      subHeaderText: "Dive Power PMX E2E",
                    })}
                  >
                    GE Power PMXE2E: Healthy
                  </a>
                </li>
                <li>GE Power: No Dashboards & Users</li>
              </ul>
              <div className="row service-text">
                <div className="col service-tile-content">
                  <div className="titles">ALERTS</div>
                  <ul className="list-unstyled service-details">
                    <li>GE Power Subscription has no active Dashboard</li>
                    <li>GE Power Subscription has no active Users</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 service-tile-content">
              <div className="card border-0">
                <div className="card-body p-0">
                  <div id="container" style={{ height: "15rem" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
