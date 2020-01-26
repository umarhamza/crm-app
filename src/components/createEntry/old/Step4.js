import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { RaisedButton } from "material-ui";

class Step4 extends Component {
  next = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  prev = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, styles, handleChecked, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div id="step-4" className="step-4 container">
            <h5 className="grey-text text-darken-3">
              Please fill in details about your hair
            </h5>

            <div>
              <label>
                <input
                  id="colorhair"
                  className="filled-in"
                  type="checkbox"
                  value="Do you have currently colour your hair?"
                  onChange={handleChecked("colorhair")}
                />
                <span>Do you have currently colour your hair?</span>
              </label>
            </div>

            <div className="input-field">
              <label htmlFor="often_colorhair">If yes, how often?</label>
              <input
                value={values.often_colorhair}
                type="text"
                id="often_colorhair"
                onChange={handleChange("often_colorhair")}
              />
            </div>

            <div>
              <label>
                <input
                  id="extensions"
                  className="filled-in"
                  type="checkbox"
                  value="Have you used hair extensions before?"
                  onChange={handleChecked("extensions")}
                />
                <span>Have you used hair extensions before?</span>
              </label>
            </div>

            <div className="input-field">
              <label htmlFor="extensions_menthod">If yes, which method?</label>
              <input
                value={values.extensions_menthod}
                type="text"
                id="extensions_menthod"
                onChange={handleChange("extensions_menthod")}
              />
            </div>

            <div>
              <p>How will you describe your hair type?</p>
              <label>
                <input
                  className="with-gap"
                  name="hairtype"
                  type="radio"
                  value="My hair type is: <b>Fine</b>"
                  onChange={handleChange("hairtype")}
                />
                <span>Fine</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="hairtype"
                  type="radio"
                  value="My hair type is: <b>Medium</b>"
                  onChange={handleChange("hairtype")}
                />
                <span>Medium</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="hairtype"
                  type="radio"
                  value="My hair type is: <b>Thick</b>"
                  onChange={handleChange("hairtype")}
                />
                <span>Thick</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="hairtype"
                  type="radio"
                  value="My hair type is: <b>Very thick</b>"
                  onChange={handleChange("hairtype")}
                />
                <span>Very thick</span>
              </label>
            </div>

            <div>
              <p>My hair texture is:</p>
              <label>
                <input
                  className="with-gap"
                  name="hairtexture"
                  type="radio"
                  value="My hair texture is: <b>Curly</b>"
                  onChange={handleChange("hairtexture")}
                />
                <span>Curly</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="hairtexture"
                  type="radio"
                  value="My hair texture is: <b>Wavy</b>"
                  onChange={handleChange("hairtexture")}
                />
                <span>Wavy</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="hairtexture"
                  type="radio"
                  value="My hair texture is: <b>Straight</b>"
                  onChange={handleChange("hairtexture")}
                />
                <span>Straight</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="hairtexture"
                  type="radio"
                  value="My hair texture is: <b>Frizzy</b>"
                  onChange={handleChange("hairtexture")}
                />
                <span>Frizzy</span>
              </label>
            </div>

            <div>
              <p>My hair length is:</p>
              <label>
                <input
                  className="with-gap"
                  name="hairlength"
                  type="radio"
                  value="My hair length is: <b>Above the Solder</b>"
                  onChange={handleChange("hairlength")}
                />
                <span>Above the Solder</span>
              </label>
              <label>
                <input
                  className="with-gap"
                  name="hairlength"
                  type="radio"
                  value="My hair length is: <b>Below the Solder</b>"
                  onChange={handleChange("hairlength")}
                />
                <span>Below the solder</span>
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

export default Step4;
