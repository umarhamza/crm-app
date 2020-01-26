import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { RaisedButton } from "material-ui";

class Step5 extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  prev = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange, styles } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div id="step-5" className="step-5 container">
            <h5 className="grey-text text-darken-3">Details of Treatment</h5>

            <div className="row no-padding">
              <div className="col s6">
                <div className="input-field">
                  <label htmlFor="date">Date</label>
                  <input
                    value={values.date}
                    type="text"
                    id="date"
                    data-date="null"
                    className="datepicker"
                  />
                </div>
              </div>

              <div className="col s6">
                <div className="input-field">
                  <label htmlFor="treatment">Details of Treatment</label>
                  <input
                    value={values.treatment}
                    type="text"
                    id="treatment"
                    onChange={handleChange()}
                  />
                </div>
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="comments">Comments</label>
              <textarea
                value={values.comments}
                type="text"
                className="materialize-textarea"
                id="comments"
              />
            </div>

            <div className="row no-padding">
              <div className="col s5 m3">
                <div className="input-field">
                  <label htmlFor="charge">Charge</label>
                  <input value={values.charge} type="text" id="charge" />
                </div>
              </div>
              <div className="col s7 m9">
                <div className="input-field">
                  <label htmlFor="sign">Signature</label>
                  <input value={values.sign} type="text" id="sign" />
                </div>
              </div>
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

export default Step5;
