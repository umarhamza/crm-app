const initState = {};

const clientReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_CLIENT":
      console.log("create client");
      return {qa: action.qa};
    case "CREATE_CLIENT_ERROR":
      console.log('create client error', action.err);
      return state;
    case "UPDATE_CLIENT":
      console.log("create client");
      return {qa: action.qa};
    case "UPDATE_CLIENT_ERROR":
      console.log('create client error', action.err);
      return state;      
      case "DELETE_CLIENT":
        console.log("delete client");
        return state;
      case "DELETE_CLIENT_ERROR":
        console.log('delete client error', action.err);
        return state;      
    default:
      return state;
  }
};

export default clientReducer;
