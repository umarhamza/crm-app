import React from "react";
import { Link } from "react-router-dom";
import moment from 'moment'


const UserList = ({ users }) => {

  return (
    <div className="user-list section">
      { 
        users && users.map(user => {
          const role = user.role

          return (
            <Link to={'/users/' + user.id} key={user.id}>
              <div className="card z-depth-0 user-summary">
                <div className="card-content grey-text text-darken-3">
                  <span className="card-title">Name: {user.firstName} {user.lastName}</span>
                  <p className="grey-text">Initials: { user.initials.toUpperCase() }</p>
                  <p className="grey-text">Role: { role }</p>
                  {user.createdAt && <p className="grey-text">{moment(user.createdAt.toDate()).calendar()}</p>}
                </div>
              </div>
            </Link>
          );
        })        
      }
    </div>
  );
};

export default UserList;
