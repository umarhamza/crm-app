import React, {Fragment} from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from 'moment';

const ClientDetails = props => {
  const { client, auth, id } = props;

  const handleEdit = e => {
    e.preventDefault()
  }
  
  if (!auth.uid) return <Redirect to="/signin" />  
  
  if(client) {
    const clientName = (client.forename && client.surname) ? `Customer Name: ${client.forename} ${client.surname}` : (client.forename) ? `Customer Name: ${client.forename}` : null;
    
    return (
        <Fragment>
            <div className="card z-depth-0 grey lighten-4">
                <div className="card-action grey-text">
                    {clientName && <span className="card-title">{clientName}</span>}
                    <p className="grey-text">created by: {client.authorFirstName} {client.authorLastName}</p>
                    <div>{moment(client.createdAt.toDate()).calendar()}</div>
                </div>

                <div className="card-content">

                </div>
            </div>
        </Fragment>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading client...</p>
      </div>
    );
  }

};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  const clients = state.firestore.data.clients;
  const client = clients ? clients[id] : null;

  return {
    client,
    auth: state.firebase.auth,
    id
  };
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'clients' }
  ])
)(ClientDetails);
