import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {connect} from "react-redux";

const Navbar = props => {
  const {auth, profile, clients} = props;
  const links = auth.uid ? <SignedInLinks profile={profile} clients={clients} /> : <SignedOutLinks />


  return (
    <nav className="main-nav nav-extended grey darken-3">
      <div className="nav-wrapper">
        <div className="container">
          
          {links}
          
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    clients: state.firestore.ordered.clients
    
  }
}

export default connect(mapStateToProps)(Navbar);
