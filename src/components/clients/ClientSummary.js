import React from "react";

const ClientSummary = ({ client }) => {
  const entry = client.qa
  const firstName = entry[0].answer
  const lastName = entry[1].answer
  const mobile = entry[7].answer ? entry[7].answer : 'no entry!'
  const treatmentDate = entry[29].answer ? entry[29].answer : 'no entry!'
  const fullName = firstName ? lastName ? firstName + ' ' + lastName : firstName : 'No name found'

  return (
    <div className="card z-depth-0 client-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title capitalize"><strong>Name:</strong> {fullName}</span>
        <p className="grey-text"><strong>Treatment Date:</strong> {treatmentDate}</p>
        <p className="grey-text"><strong>Telephone:</strong> { mobile }</p>
        <hr/>
        <p className="grey-text"><strong>Created by:</strong> { client.authorFirstName } {client.authorLastName}</p>
      </div>
    </div>
  );
};

export default ClientSummary;
