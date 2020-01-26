import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = props => {
  const navClass = props.navClass ? props.navClass : "";

  return (
    <ul id="nav-mobile" className={navClass}>
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Sign In</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
