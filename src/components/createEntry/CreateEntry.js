import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import { RaisedButton } from "material-ui";

import { createClient } from "../../store/actions/clientActions";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import questionsAndAnswers from "../../store/data/questionsAndAnswers";

class CreateEntry extends Component {
  state = {
    qa: questionsAndAnswers,
    step: 1
  };

  // Proceed to next step 
  nextStep = () => {
    const { step } = this.state
    if (step <= 7) {
      this.setState({
        step: step + 1
      });
    }
  };

  // Back to previous step
  prevStep = () => {
    const { step } = this.state
    if (step > 1) {
      this.setState({
        step: step - 1
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createClient(this.state.qa)
    this.props.history.push('/')
  };

  handleChange = i => (e) => {
    const { value } = e.target
    let qa = this.state.qa
    qa[i].answer = value

    this.setState({
      qa
    });
  };

  handleChecked = i => (e) => {
    const ans = e.target.checked ? "Yes" : "No";
    let qa = this.state.qa
    qa[i].answer = ans

    this.setState({
      qa
    });
  };

  render() {
    const {auth, profile} = this.props;
    if (!auth.uid) return <Redirect to="/signin" />

    const styles = {
      button: {
        margin: "15px 15px 0 0"
      }
    };
    const showHideStepBtn = this.state.step === 7;
    const isCustomer = profile.role === 'Customer'
    // const isAdmin = profile.role === 'Admin' || profile.role === 'Super Admin'

    const form = this.state.qa.map((field, index) => {
      const id = field.id
      const type = field.type
      const slug = field.slug
      const isCheckbox = type === 'checkbox'
      let value = field.answer
      const handleChange = (isCheckbox) ? this.handleChecked : this.handleChange 
      const showHideStep = this.state.step === parseInt(field.step, 10) ? 'block' : 'none'
      
      const readOnlyName = isCustomer && slug === 'forename' ? true : false
      const readOnlySurname = isCustomer && slug === 'surname' ? true : false
      const readOnly = readOnlyName || readOnlySurname ? true : false

      if (readOnlyName) {
        value = profile.firstName
      } else if (readOnlySurname) {
        value = profile.lastName
      }

      const labelIsActive = value ? 'active' : ''

      switch (type) {
        case 'checkbox':
          return (
            <div key={id} style={{display: showHideStep}}>
            <label>
              <input
                id={slug}
                className="filled-in"
                type={type}
                value={value}
                checked={field.answer !== "No"}
                onChange={handleChange(index)}
              />
              <span>{field.question}</span>
            </label>
          </div>
          );
        case 'radio':
          const label = field.options.map((option, i) => {
            return (
              <label key={i} className={`pos-r ${i !== 0 ? 'ml-30' : ''}`} style={{display: showHideStep}}>
                <input
                  className="with-gap"
                  name={slug}
                  type={type}
                  value={option}
                  checked={field.answer === option}
                  onChange={handleChange(index)}
                />
                <span>{option}</span>
              </label>
            );
          });
          return (
            <div key={id} style={{display: showHideStep}}>
              <p>{field.question}</p>
              {label}
            </div>
          );
        case 'textarea':
          return (
            <div key={id} className="input-field" style={{display: showHideStep}}>
              <label className={labelIsActive} htmlFor={slug}>{field.question}</label>
              <textarea
                value={value}
                id={slug}
                className="materialize-textarea"
                onChange={handleChange(index)}
              />
            </div>
          );
        default:
          return (
            <div key={id} className="input-field" style={{display: showHideStep}}>
                <label className={labelIsActive} htmlFor={slug}>{field.question}</label>
                <input
                    value={value}
                    readOnly={readOnly}
                    type={type}
                    id={slug}
                    onChange={handleChange(index)}
                  />
            </div>
          );
      }

    })

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div className="container">
                <form className="entry-form">
                  <div className="entry-form-inner">
                    {form}
                  </div>
                  
                  <div style={{display: showHideStepBtn ? 'none' : 'block'}} >
                    <RaisedButton
                      label="Back"
                      primary={false}
                      style={{display: this.state.step === 1 ? 'none' : 'inline-block', margin: styles.button.margin}}
                      onClick={this.prevStep}
                    />
                    <RaisedButton
                      label="Continue"
                      primary={true}
                      style={styles.button}
                      onClick={this.nextStep}
                    />
                  </div>
                  <div style={{display: showHideStepBtn ? 'block' : 'none'}} >
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
                    <RaisedButton
                      label="Back"
                      primary={false}
                      style={styles.button}
                      onClick={this.prevStep}
                    />
                    <RaisedButton
                      label="Submit"
                      primary={true}
                      style={styles.button}
                      onClick={this.handleSubmit}
                    />
                  </div>
                </form>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )

  } // render
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    createClient: client => dispatch(createClient(client))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEntry);
