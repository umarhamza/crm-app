import React from "react";
import { Link } from "react-router-dom";

const NotFound = ({ client }) => {

    return (
        <div className="card z-depth-0 client-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title capitalize"><strong>No Entries Found</strong></span>
                <p className="grey-text">Please add new entry</p>
                <hr />
                <p className="grey-text"><Link to="/create"><u>Add Entry</u></Link></p>
            </div>
        </div>
    );
};

export default NotFound;
