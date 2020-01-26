import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedInLinks = props => {
  const navClass = props.navClass ? props.navClass : "";

  const isAdmin = props.profile.role === 'Admin'
  const hasClients = props.clients ? props.clients.length : null
  const userId = props.profile.authorId
  const user = isAdmin ? <NavLink to="/users">Users</NavLink> : <NavLink to={'/users/' + userId}>My Profile</NavLink>

  return (
    <ul className={navClass}>
      <li>
        <NavLink to="/">{isAdmin ? 'All Entries' : 'My Entry'}</NavLink>      
      </li>
      <li>
        {(!hasClients || isAdmin) && <NavLink to="/create">{isAdmin ? 'Create Client Entry' : 'Create Entry'}</NavLink>  }    
      </li>
      <li>
        {user}
      </li>
      <li>
        <a onClick={props.signOut}>Logout</a>
      </li>
      <li>
        <NavLink
          to="/"
          className="btn btn-floating pink lighten-1 hide-on-med--and-down"
        >
          {props.profile ? props.profile.initials : null}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
