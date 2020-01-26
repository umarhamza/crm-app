import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ClientDetails from "./components/clients/ClientDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateEntry from "./components/createEntry/CreateEntry";
import Users from "./components/users/Users";
import UserDetails from "./components/users/UserDetails";

import AddIcon from '@material-ui/icons/AddCircleRounded';
import ListIcon from '@material-ui/icons/ViewListRounded';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import SignOutIcon from '@material-ui/icons/ExitToAppOutlined';
import AccountIcon from '@material-ui/icons/AccountCircleRounded';
import SignUpIcon from '@material-ui/icons/GroupAddRounded';
import SignInIcon from '@material-ui/icons/LockOpen';

const App = () => {
  const [state] = React.useState({
    isOpen: false,
    navLinks : {
      signedInLinks: [
        {to: '/', label: 'Dashboard', classes: '', icon: <ListIcon />},
        {to: 'create', label: 'Create Entry', classes: '', icon: <AddIcon />},
        {to: '#', label: 'More', classes: 'sidenav-trigger', icon: <MoreIcon />}
      ],
      signedInDrawer: [
        {to: '/', label: 'Sign Out', classes: '', icon: <SignOutIcon />},
        {to: '/', label: 'Account', classes: '', icon: <AccountIcon />},
      ],
      signedOutLinks: [
        {to: 'signup', label: 'Sign Up', classes: '', icon: <SignUpIcon />},
        {to: 'signin', label: 'Sign In', classes: '', icon: <SignInIcon />},
      ]
    }
  });


  return (
    <BrowserRouter>
      <div className="App">
        <Navbar navLinks={state.navLinks} />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/clients/:id" component={ClientDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateEntry} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={UserDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
