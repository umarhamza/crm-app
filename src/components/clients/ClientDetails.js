import React, {useState, Fragment} from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { updateClient, deleteClient } from "../../store/actions/clientActions";
import { Redirect } from "react-router-dom";
import moment from 'moment';

const ClientDetails = props => {
  const { client, auth, id } = props;

  if(client) {    
    const [state, setState] = useState({
      deleteClient: false,
      editClient: false,
      id,
      qa: [...client.qa]
    });

    const handleSubmit = (e) => {
      e.preventDefault()
      props.updateClient(state);
    }

    const handleEdit = e => {
      e.preventDefault()
      const toggleDelete = state.editClient

      setState({
        ...state,
        editClient: !toggleDelete
      })

			state.editClient && handleSubmit(e)
    }

    const handleCancelEdit = e => {
      e.preventDefault()
      const toggleDelete = state.editClient

      setState({
        ...state,
        qa: [...client.qa],
        editClient: !toggleDelete
      })
    }

    const handleDelete = e => {
      e.preventDefault()
      const toggleDelete = state.deleteClient
        
      setState({
        ...state,
        deleteClient: !toggleDelete,
      })

      if (state.deleteClient) {
        props.deleteClient(id)
        props.history.push('/');
      }
    }

    const handleCancelDelete = e => {
      e.preventDefault()
      const toggleDelete = state.deleteClient
      
      setState({
        ...state,
        deleteClient: !toggleDelete,
      })
    }

    const handleChange = i => (e) => {
      const { value } = e.target
      let qa = state.qa
      qa[i].answer = value

      setState({
        ...state,
        qa
      });
    };

    const handleChecked = i => (e) => {
      const ans = e.target.checked ? "Yes" : "No";
      let qa = state.qa
      qa[i].answer = ans

      setState({
        ...state,
        qa
      });
    };
    
    if (!auth.uid) return <Redirect to="/signin" />  
  
    const entries = [...client.qa]
    const forename = entries[0].answer
    const surname = entries[1].answer
    const clientName = (forename && surname) ? `Customer Name: ${forename} ${surname}` : (forename) ? `Customer Name: ${forename}` : null;
    
    return (
        <div className="container section">

          <div className="client-details mb-20" style={{display: state.editClient ? 'none' : 'block'}}>
            <div className="card z-depth-0 grey lighten-4">
              <div className="card-action grey-text">
                {clientName && <span className="card-title capitalize">{clientName}</span>}
                <p className="grey-text">created by: {client.authorFirstName} {client.authorLastName}</p>
                <div>{moment(client.createdAt.toDate()).calendar()}</div>
                <hr/>
                {
                  entries.map((entry, index) => {
                    return (
                      <Fragment key={entry.id}>
                        <h6>{entry.question}</h6>
                        <p><span className="capitalize">{entry.slug.replace( new RegExp("\\_","gm")," ")}</span>: {entry.answer}</p>
                        <br/>
                      </Fragment>
                    )
                  })
                }
              </div>
            </div>
          </div>

          <div className="edit-client mb-20" style={{display: state.editClient ? 'block' : 'none'}}>
            <form>
            {
              state.qa.map((field, index) => {
                const id = field.id
                const type = field.type
                const slug = field.slug
                const isCheckbox = type === 'checkbox'
                const value = field.answer
                const labelIsActive = value ? 'active' : ''
                const handle_change = (isCheckbox) ? handleChecked : handleChange 
          
                switch (type) {
                  case 'checkbox':
                    return (
                      <div key={id}>
                      <label>
                        <input
                          id={slug}
                          className="filled-in"
                          type={type}
                          value={value}
                          checked={field.answer !== "No"}
                          onChange={handle_change(index)}
                        />
                        <span>{field.question}</span>
                      </label>
                    </div>
                    );
                  case 'radio':
                    const label = field.options.map((option, i) => {
                      return (
                        <label key={i} className={`pos-r ${i !== 0 ? 'ml-30' : ''}`}>
                          <input
                            className="with-gap"
                            name={slug}
                            type={type}
                            value={option}
                            checked={field.answer === option}
                            onChange={handle_change(index)}
                          />
                          <span>{option}</span>
                        </label>
                      );
                    });
                    return (
                      <div key={id}>
                        <p>{field.question}</p>
                        {label}
                      </div>
                    );
                  case 'textarea':
                    return (
                      <div key={id} className="input-field">
                        <label className={labelIsActive} htmlFor={slug}>{field.question}</label>
                        <textarea
                          value={value}
                          id={slug}
                          className="materialize-textarea"
                          onChange={handle_change(index)}
                        />
                      </div>
                    );
                  default:
                    return (
                      <div key={id} className="input-field">
                          <label className={labelIsActive} htmlFor={slug}>{field.question}</label>
                          <input
                              value={value}
                              type={type}
                              id={slug}
                              onChange={handle_change(index)}
                            />
                      </div>
                    );
                }
          
              })
              }
            </form>
          </div>

          <button disabled={state.deleteClient} className="waves-effect waves-light btn pink mb-20 mr-20" onClick={handleEdit}>{state.editClient ? 'Save' : 'Edit'}  Entry</button>
          <button style={{display: state.editClient ? 'inline-block' : 'none'}} className="waves-effect waves-light btn grey lighten-1 mb-20" onClick={handleCancelEdit}>Cancel</button>			
          <br/>
          <div className="edit-delete-buttons" style={{display: !state.editClient ? 'block' : 'none'}}>
            <button style={{display: !state.editClientClient ? 'inline-block' : 'none'}} className={`waves-effect waves-light btn mr-20 ${state.deleteClient ? 'pink' : 'grey lighten-1'}`} onClick={handleDelete}>{state.deleteClient ? 'Yes I am sure I want to Delete Entry!' : 'Delete Entry'}</button>
            <button style={{display: state.deleteClient ? 'inline-block' : 'none'}} className="waves-effect waves-light btn grey lighten-1" onClick={handleCancelDelete}>Cancel</button>			
          </div>
          
        </div>

    );
  } else {
    return (
      <div className="container center">
        <p>Loading entry...</p>
      </div>
    );
  }

};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const clients = state.firestore.data.clients;
  const client = clients ? clients[id] : null;

  return {
    client,
    auth: state.firebase.auth,
    id
  };
}

const mapDispatchToProps = dispatch => {
  return {
    deleteClient: clientId => dispatch(deleteClient(clientId)),
    updateClient: client => dispatch(updateClient(client))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(ownProps => [
    { collection: 'clients', doc: ownProps.match.params.id }
  ])
)(ClientDetails);
