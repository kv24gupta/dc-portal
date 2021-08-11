import React from "react";

export default class CenterHeader extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Header: ",this.props.headerText,"...","Persona: ",this.props.subText)
    /*  this.state = {
      headerText: this.props.headerText,
      persona: this.props.subText,
    }; */

    /* this.changePersona = this.changePersona.bind(this); */
  }

  /* changePersona(value) {
    this.setState({
      persona: value.personaName,
    });
  } */

  render() {
    // console.log("Persona Options: ", this.props.subHeaderOpts);
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="headers row">
          <div className="col pr-0">
            {this.props.headerText}

            <span className="global-icon ml-1">
              <a
                className="dropdown-toggle"
                href="#"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {this.props.subText}
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={this.props.onPersonaChange.bind(this, {
                    personaName: "GLOBAL",
                  })}
                >
                  GLOBAL
                </a>
                {this.props.subHeaderOpts.map((option, index) => {
                  {
                    /* console.log("Option: ", option); */
                  }
                  return (
                    <a
                      className="dropdown-item"
                      href="#"
                      key={index}
                      onClick={this.props.onPersonaChange.bind(this, {
                        personaName: option,
                      })}
                    >
                      {option}
                    </a>
                  );
                })}

                {/* <a
                  className="dropdown-item"
                  href="#"
                  onClick={this.props.onPersonaChange.bind(this, {
                    personaName: "Persona 2",
                  })}
                >
                  Persona 2
                </a> */}
              </div>
            </span>
          </div>
        </div>
        <div className="col-sm"></div>
        <div className="search-bar">
          <form id="search-form">
            <div className="search">
              <input
                type="text"
                name="search"
                className="round borderStyle"
                placeholder="search"
              />
              <input type="submit" className="corner" value="" />
            </div>
          </form>
        </div>
      </nav>
    );
  }
}
