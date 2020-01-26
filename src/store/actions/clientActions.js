export const createClient = qa => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('clients').add({
      qa,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId,
      createdAt: new Date()
    }).then(()=>{
      dispatch({ type: "CREATE_CLIENT", qa});
    }).catch((err)=>{
      dispatch({type: "CREATE_CLIENT_ERROR", err});
    });
  };
};

export const updateClient = ({qa, id}) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();

    firestore.collection('clients').doc(id).update({
      qa,
    }).then(()=>{
      dispatch({ type: "UPDATE_CLIENT", qa});
    }).catch((err)=>{
      dispatch({type: "UPDATE_CLIENT_ERROR", err});
    });
  };
};

export const deleteClient = clientId => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    const firestore = getFirestore();

    firestore.collection("clients").doc(clientId).delete()
    .then(() => {
      dispatch({ type: "DELETE_CLIENT", clientId});
    }).catch((err) => {
      dispatch({type: "DELETE_CLIENT_ERROR", clientId, err});
    });
  };
};

