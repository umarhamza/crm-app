export const updateUser = ({data}) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
      // make async call to database
      const firestore = getFirestore();
      const user = data

      firestore.collection('users').doc(user.authorId).update({
        ...user,
      }).then(()=>{
        dispatch({ type: "UPDATE_USER", user});
      }).catch((err)=>{
        dispatch({type: "UPDATE_USER_ERROR", err});
      });
    };
  };
  
  export const deleteUser = userId => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
      const firestore = getFirestore();
  
      firestore.collection("users").doc(userId).delete()
      .then(() => {
        dispatch({ type: "DELETE_USER", userId});
      }).catch((err) => {
        dispatch({type: "DELETE_USER_ERROR", userId, err});
      });
    };
  };