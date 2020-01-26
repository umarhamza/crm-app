import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { RaisedButton } from "material-ui";

class Step2 extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  prev = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { styles, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div id="step-2" className="step-2 container">
            <h5 className="grey-text text-darken-3">
              Please enter your GP's details
            </h5>
            <div className="input-field">
              <label htmlFor="gp_name">GP's Name</label>
              <input type="text" id="gp_name" onChange={handleChange()} />
            </div>

            <div className="input-field">
              <label htmlFor="gp_email">GP's Email</label>
              <input type="email" id="gp_email" onChange={handleChange()} />
            </div>

            <div className="input-field">
              <label htmlFor="gp_address">GP's Address</label>
              <textarea
                className="materialize-textarea"
                type="text"
                id="gp_address"
                onChange={handleChange()}
              />
            </div>

            <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.prev}
            />
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.next}
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Step2;
