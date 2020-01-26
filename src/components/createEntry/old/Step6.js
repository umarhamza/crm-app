import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { RaisedButton } from "material-ui";

class Step6 extends Component {
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
          <div id="step-6" className="step-6 container">
            <h5 className="grey-text text-darken-3">
              Please fill in your hair condition
            </h5>

            <div>
              <p>Your current hair conditions:</p>
              <label>
                <input
                  className="with-gap"
                  name="haircondition"
                  type="radio"
                  value="My hair condition is: <b>Dry</b>"
                  onChange={handleChange("haircondition")}
                />
                <span>Dry</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="haircondition"
                  type="radio"
                  value="My hair condition is: <b>Greasy</b>"
                  onChange={handleChange("haircondition")}
                />
                <span>Greasy</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="haircondition"
                  type="radio"
                  value="My hair condition is: <b>Normal</b>"
                  onChange={handleChange("haircondition")}
                />
                <span>Normal</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="haircondition"
                  type="radio"
                  value="My hair condition is: <b>Chemically damaged</b>"
                  onChange={handleChange("haircondition")}
                />
                <span>Chemically damaged</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="haircondition"
                  type="radio"
                  value="My hair condition is: <b>Heat damaged</b>"
                  onChange={handleChange("haircondition")}
                />
                <span>Heat damaged</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="haircondition"
                  type="radio"
                  value="My hair condition is: <b>Other</b>"
                  onChange={handleChange("haircondition")}
                />
                <span>Other</span>
              </label>
            </div>

            <div>
              <p>My scalp condition is:</p>
              <label>
                <input
                  className="with-gap"
                  name="scalpcondition"
                  type="radio"
                  value="My hair texture is: <b>Dandruff</b>"
                  onChange={handleChange("scalpcondition")}
                />
                <span>Dandruff</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="scalpcondition"
                  type="radio"
                  value="My hair texture is: <b>Oily</b>"
                  onChange={handleChange("scalpcondition")}
                />
                <span>Oily</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="scalpcondition"
                  type="radio"
                  value="My hair texture is: <b>Dry</b>"
                  onChange={handleChange("scalpcondition")}
                />
                <span>Dry</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="scalpcondition"
                  type="radio"
                  value="My hair texture is: <b>Normal</b>"
                  onChange={handleChange("scalpcondition")}
                />
                <span>Normal</span>
              </label>
            </div>

            <div>
              <p>Diagnostics Test:</p>
              <label>
                <input
                  className="with-gap"
                  name="diagnostic"
                  type="radio"
                  value="The diagnostics is: <b>Skin</b>"
                  onChange={handleChange("diagnostic")}
                />
                <span>Skin</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="diagnostic"
                  type="radio"
                  value="The diagnostics is: <b>Elasticity</b>"
                  onChange={handleChange("diagnostic")}
                />
                <span>Elasticity</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="diagnostic"
                  type="radio"
                  value="The diagnostics is: <b>Strand test</b>"
                  onChange={handleChange("diagnostic")}
                />
                <span>Strand test</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="diagnostic"
                  type="radio"
                  value="The diagnostics is: <b>Pre-perm test curl</b>"
                  onChange={handleChange("diagnostic")}
                />
                <span>Pre-perm test curl</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="diagnostic"
                  type="radio"
                  value="The diagnostics is: <b>Colour test</b>"
                  onChange={handleChange("diagnostic")}
                />
                <span>Colour test</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="diagnostic"
                  type="radio"
                  value="The diagnostics is: <b>Incompatibility</b>"
                  onChange={handleChange("diagnostic")}
                />
                <span>Incompatibility</span>
              </label>
            </div>

            <div>
              <p>Growth Pattern:</p>
              <label>
                <input
                  className="with-gap"
                  name="patterns"
                  type="radio"
                  value="The hair growth pattern is: <b>Nape Whorls</b>"
                  onChange={handleChange("patterns")}
                />
                <span>Nape Whorls</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="patterns"
                  type="radio"
                  value="The hair growth pattern is: <b>Widow's Peak</b>"
                  onChange={handleChange("patterns")}
                />
                <span>Widow's Peak</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="patterns"
                  type="radio"
                  value="The hair growth pattern is: <b>Cowlick</b>"
                  onChange={handleChange("patterns")}
                />
                <span>Cowlick</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="patterns"
                  type="radio"
                  value="The hair growth pattern is: <b>Double Crown</b>"
                  onChange={handleChange("patterns")}
                />
                <span>Double Crown</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="patterns"
                  type="radio"
                  value="The hair growth pattern is: <b>Receding Hairline</b>"
                  onChange={handleChange("patterns")}
                />
                <span>Receding Hairline</span>
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

export default Step6;
