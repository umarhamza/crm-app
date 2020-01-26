import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { RaisedButton, TextField } from "material-ui";

class Step1 extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, styles } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div id="step-1" className="step-1 container">
            <h5 className="grey-text text-darken-3">Add your details</h5>

            <div className="row no-padding">
              <div className="col s6">
                <div className="input-field">
                  <label htmlFor="forename">Forename</label>
                  <input
                    value={values.forename}
                    type="text"
                    id="forename"
                    onChange={handleChange()}
                  />
                </div>
              </div>

              <div className="col s6">
                <div className="input-field">
                  <label htmlFor="surname">Surname</label>
                  <input
                    value={values.surname}
                    type="text"
                    id="surname"
                    onChange={handleChange()}
                  />
                </div>
              </div>
            </div>

            <div className="row no-padding">
              <div className="col s7 m9">
                <div className="input-field">
                  <label htmlFor="date_of_birth" className="active">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    className="datepicker"
                    data-date="1960, 01, 01"
                    id="date_of_birth"
                    value={values.date_of_birth}
                    readOnly
                  />
                </div>
              </div>
              <div className="col s5 m3">
                <div className="input-field">
                  <label
                    className={values.age !== "" ? "active" : ""}
                    htmlFor="age"
                  >
                    Age
                  </label>
                  <input
                    disabled
                    id="age disabled"
                    className={"validate"}
                    type="text"
                    value={values.age}
                  />
                </div>
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="street">Street</label>
              <input
                value={values.street}
                type="text"
                id="street"
                onChange={handleChange()}
              />
            </div>

            <div className="row no-padding">
              <div className="col s7 m8">
                <div className="input-field">
                  <label htmlFor="town">Town</label>
                  <input
                    value={values.town}
                    type="text"
                    id="town"
                    onChange={handleChange()}
                  />
                </div>
              </div>
              <div className="col s5 m4">
                <div className="input-field">
                  <label htmlFor="postcode">Postcode</label>
                  <input
                    value={values.postcode}
                    type="text"
                    id="postcode"
                    onChange={handleChange()}
                  />
                </div>
              </div>
            </div>

            <div className="row no-padding">
              <div className="col s6">
                <div className="input-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    value={values.phone}
                    type="tel"
                    id="phone"
                    onChange={handleChange()}
                  />
                </div>
              </div>
              <div className="col s6">
                <div className="input-field">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    value={values.mobile}
                    type="tel"
                    id="mobile"
                    onChange={handleChange()}
                  />
                </div>
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                value={values.email}
                type="email"
                id="email"
                onChange={handleChange()}
              />
            </div>

            <TextField
              hintText="Enter Your Email"
              floatingLabelText="Email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br />
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              onClick={this.next}
            />
          </div>
          {/* container */}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Step1;
