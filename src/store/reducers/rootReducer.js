import authReducer from "./authReducer";
import clientReducer from "./clientReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  user: userReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer

});

export default rootReducer;
