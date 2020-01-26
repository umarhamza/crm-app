import React from "react";
import ClientSummary from "./ClientSummary";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";


const ClientList = ({ clients, auth, isAdmin }) => {

  // NOTE: use the FIND method for just one listing
  let output = null
  const client = clients ? clients.filter(client => client.authorId === auth.uid) : []
  const clientlist = ( isAdmin === true )  ? (
    clients && clients.map(client => {
      return (
        <Link to={'/clients/' + client.id} key={client.id}>
          <ClientSummary client={client} />
        </Link>
      );
    })
  ) : (
    client && client.map(client => {
      if ( client.authorId === auth.uid ) {
        return (
          <Link to={'/clients/' + client.id} key={client.id}>
            <ClientSummary client={client} />
          </Link>
        );
      } else {
        return (
          <p>Are you sure you're the user?</p>
        )
      }
    })
  )

  if (clientlist) {
    output = [clientlist].length ? clientlist : <NotFound />
  }

  return (
    <div className="client-list section">
      { output }
    </div>
  );
};

export default ClientList;
