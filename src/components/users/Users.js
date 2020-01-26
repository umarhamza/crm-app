import React, { Component } from "react";
import UserList from "./UserList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Redirect} from "react-router-dom";

class Users extends Component {
  render() {
    const { users, auth, profile } = this.props;
    const admin = (profile.role !== undefined) ? (profile.role === 'Admin') || (profile.role === 'Super Admin') : false;   

    if(!auth.uid) return <Redirect to="/signin" />
    if(admin === false) return <Redirect to="/" />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <UserList users={users} auth={auth} />
          </div>
          <div className="col s12 m5 offset-m1">
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'users' },
  ])
)(Users);
