import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { RaisedButton } from "material-ui";

class Step3 extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  prev = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { styles, handleChecked } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div id="step-3" className="step-3 container">
            <h5 className="grey-text text-darken-3">
              Please fill in your medical history
            </h5>
            <div>
              <label>
                <input
                  id="hairloss"
                  className="filled-in"
                  type="checkbox"
                  value="Have you ever suffered from hair loss?"
                  onChange={handleChecked("hairloss")}
                />
                <span>Have you ever suffered from hair loss?</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  id="alopecia"
                  className="filled-in"
                  type="checkbox"
                  value="Have you ever been diagnosed from alopecia?"
                  onChange={handleChecked("alopecia")}
                />
                <span>Have you ever been diagnosed from alopecia?</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  id="medication"
                  className="filled-in"
                  type="checkbox"
                  value="Do you take any medication?"
                  onChange={handleChecked("medication")}
                />
                <span>Do you take any medication?</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  id="pregnant"
                  className="filled-in"
                  type="checkbox"
                  value="Have you been pregnant in the last 6 months?"
                  onChange={handleChecked("pregnant")}
                />
                <span>Have you been pregnant in the last 6 months?</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  id="psoriasis"
                  className="filled-in"
                  type="checkbox"
                  value="Do you suffer from psoriasis to the scalp?"
                  onChange={handleChecked("psoriasis")}
                />
                <span>Do you suffer from psoriasis to the scalp?</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  id="sensitive_scalp"
                  className="filled-in"
                  type="checkbox"
                  value="Do you have sensitive scalp?"
                  onChange={handleChecked("sensitive_scalp")}
                />
                <span>Do you have sensitive scalp?</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  id="allergies"
                  className="filled-in"
                  type="checkbox"
                  value="Do you have any known allergies?"
                  onChange={handleChecked("allergies")}
                />
                <span>Do you have any known allergies?</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  id="exercise"
                  className="filled-in"
                  type="checkbox"
                  value="Do you frequently swim or go to the gym?"
                  onChange={handleChecked("exercise")}
                />
                <span>Do you frequently swim or go to the gym?</span>
              </label>
            </div>

            <div>
              <label>
                <input
                  id="holidays"
                  className="filled-in"
                  type="checkbox"
                  value="Do you have upcoming holidays booked?"
                  onChange={handleChecked("holidays")}
                />
                <span>Do you have upcoming holidays booked?</span>
              </label>
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

export default Step3;
