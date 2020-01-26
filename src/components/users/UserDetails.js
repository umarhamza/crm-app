import React, {useState} from "react";
import { updateUser, deleteUser } from "../../store/actions/userActions";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from 'moment';

const UserDetails = props => {
	const { user, auth, userId, profile } = props;

  if (user) {
	  	const data = { firstName: user.firstName, lastName: user.lastName, email: user.email, initials: user.initials, role: user.role, authorId: userId }

		const [ state, setState ] = useState({
			editUser: false,
			deleteUser: false,
			data: {...data}
		})

		const handleSubmit = (e) => {
				e.preventDefault()
				props.updateUser(state);
		}
		
		const handleEdit = (e) => {
			e.preventDefault()
			const toggleEdit = state.editUser
			
			setState({
				...state,
				editUser: !toggleEdit,
			})

			state.editUser && handleSubmit(e)
		}

		const handleCancelEdit = e => {
			e.preventDefault()
			const toggleDelete = state.editUser
	  
			setState({
			  ...state,
			  data: {...data},
			  editUser: !toggleDelete
			})
		  }

		const handleDelete = e => {
			e.preventDefault()
			const toggleDelete = state.deleteUser
			
			setState({
				...state,
				deleteUser: !toggleDelete,
			})

			if (state.deleteUser) {
				props.deleteUser(userId)
				props.history.push('/')
			}
		}

		const handleCancelDelete = e => {
			e.preventDefault()
			const toggleDelete = state.deleteUser
			
			setState({
				...state,
				deleteUser: !toggleDelete,
			})
		}

		const handleChange = input => (e) => {
	    let { value } = e.target,
			id = input ? input : e.target.id;
			
			if (value.trim() === '') {
				value = user[id]
			}

			setState({
				...state,
				data: {
				...state.data,
					[id]: value
				}
			});
	}

	if (!auth.uid) return <Redirect to="/signin" />  

	let isAdmin = null
	if (profile.role) {isAdmin = profile.role !== 'Customer';}


	const updateRole = isAdmin ? (
		<select style={{ display: 'block' }} value={state.data.role} onChange={handleChange()} id="role">
			<option value="Customer">Customer</option>
			<option value="Admin">Admin</option>
			<option value="Super Admin">Super Admin</option>
		</select>
	) : (
		''
	)
	
    return (
			<div className="container section user-details">
				<div className="card z-depth-0 grey lighten-4">
					<div className="card-action grey-text">
						<div style={{display: state.editUser ? 'none' : 'block'}}>
								<span className="card-title">Name: {state.data.firstName} {state.data.lastName}</span>

								{state.data.email && <p className="grey-text">Email: { state.data.email }</p>}
								<p className="grey-text">Initials: { state.data.initials.toUpperCase() }</p>

								{state.data.role && <span className="grey-text">Role: {state.data.role}</span>}
							</div>

							<form onSubmit={handleSubmit} style={{display: state.editUser ? 'block' : 'none'}}>
								<input onChange={handleChange()} id="firstName" placeholder={state.data.firstName} type="text" disabled={state.editUser ? false : true} />
								<input onChange={handleChange()} id="lastName" placeholder={state.data.lastName} type="text" disabled={state.editUser ? false : true} />
								<input onChange={handleChange()} id="email" placeholder={state.data.email} type="text" disabled={state.editUser ? false : true} />
								<input onChange={handleChange()} id="initials" placeholder={state.data.initials} type="text"disabled={state.editUser ? false : true} />
							
								{updateRole}
							</form>

							{user.createdAt && <p className="grey-text">Created At: {moment(user.createdAt.toDate()).calendar()}</p>}							
					</div>
				</div>
				<button disabled={state.deleteUser} className="waves-effect waves-light btn pink mr-20 mb-20" onClick={handleEdit}>{state.editUser ? 'Save' : 'Edit'} User</button>
				<button style={{display: state.editUser ? 'inline-block' : 'none'}} className="waves-effect waves-light btn grey lighten-1 mb-20" onClick={handleCancelEdit}>Cancel</button>			
				<br/>
				<button style={{display: !state.editUser ? 'inline-block' : 'none'}} className={`waves-effect waves-light btn mr-20 ${state.deleteUser ? 'pink' : 'grey lighten-1'}`} onClick={handleDelete}>{state.deleteUser ? 'Yes I am sure I want to Delete User!' : 'Delete User'}</button>
				<button style={{display: state.deleteUser ? 'inline-block' : 'none'}} className="waves-effect waves-light btn grey lighten-1" onClick={handleCancelDelete}>Cancel</button>			
			</div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading user...</p>
      </div>
    );
  }

};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;

  return {
	user,
	userId: id,
	auth: state.firebase.auth,
	profile: state.firebase.profile
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateUser: user => dispatch(updateUser(user)),
    deleteUser: id => dispatch(deleteUser(id))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(ownProps => [
    { collection: 'users', doc: ownProps.match.params.id }
  ])
)(UserDetails);
