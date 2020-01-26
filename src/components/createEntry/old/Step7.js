import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { RaisedButton } from "material-ui";

class Step7 extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  prev = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, styles, handleSubmit, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div id="step-7" className="step-7 container">
            <h5 className="grey-text text-darken-3">Terms & Conditions</h5>

            <p>
              I have read the information and if i have any concerns i will
              address these with my therapist. I give permission for my
              therapist to perform the hair treatments as discussed and will not
              hold her or her staff responsible for any adverse reaction to the
              treatment. I have given accurate answers to the questions asked
              including all known allergies or prescription drugs or products i
              am currently using. I understand my aesthetician will take every
              precaution to minimise or eliminate any negative reaction as much
              as possible.
            </p>

            <div className="input-field">
              <label htmlFor="notes">Notes</label>
              <textarea
                value={values.notes}
                type=""
                id="notes"
                className="materialize-textarea"
                onChange={handleChange()}
              />
            </div>

            <div className="row no-padding">
              <div className="col s6">
                <div className="input-field">
                  <label htmlFor="customer_signature">Customer Signature</label>
                  <input
                    value={values.customer_signature}
                    type="text"
                    id="customer_signature"
                    onChange={handleChange()}
                  />
                </div>
              </div>

              <div className="col s6">
                <div className="input-field">
                  <label htmlFor="signature_date">Date</label>
                  <input
                    value={values.signature_date}
                    type="text"
                    id="signature_date"
                    data-date="null"
                    className="datepicker"
                  />
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
              label="Submit"
              primary={true}
              style={styles.button}
              onClick={handleSubmit}
            />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Step7;
