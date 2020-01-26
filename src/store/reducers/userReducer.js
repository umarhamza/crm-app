const initState = {};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      console.log("update user", action.user, state);
      return state;
    case "UPDATE_USER_ERROR":
      console.log('update user error', action.err);
      return state;
    case "DELETE_USER":
      console.log("deleted user", action.userId, state);
      return state;
    case "DELETE_USER_ERROR":
      console.log('delete user error', action.userId, action.err);
      return state;      
    default:
      return state;
  }
};

export default userReducer;
