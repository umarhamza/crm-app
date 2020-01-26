import React, { Component } from "react";
import ClientList from "../clients/ClientList";
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Redirect} from "react-router-dom";
import NotFound from "../clients/NotFound";

class Dashboard extends Component {
  componentDidMount = (state, prevState) =>{}

  render() {
    const { clients, auth, profile } = this.props
    const admin = (profile.role !== undefined) ? (profile.role === 'Admin') || (profile.role === 'Super Admin') : false
    let output = null

    if(!auth.uid) return <Redirect to="/signin" />

    if (clients) {
      output = clients.length > 0 ? <ClientList clients={clients} auth={auth} isAdmin={admin} /> : <NotFound />
    }

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {
              output
            }
            
          </div>
          <div className="col s12 m5 offset-m1">
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  return {
    clients: state.firestore.ordered.clients,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firebaseConnect(),
  firestoreConnect(ownProps => {
    const role = ownProps.profile.role
    const uid = ownProps.auth.uid ? ownProps.auth.uid : ''
    const isAdmin = (role === 'Admin' || role === 'Super Admin') ? true : false;
    const clients = (isAdmin) ? { collection: 'clients', orderBy: ['createdAt', 'desc'] } : { collection: 'clients', where: [['authorId', '==', uid]] }
    return [
      clients
    ]
  })
)(Dashboard);
