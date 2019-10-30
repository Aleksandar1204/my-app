export function usersTableReducer(state = { users: [] }, action) {
  switch (action.type) {
    case "WRITE_USERS": {
      return {
        ...state,
        users: action.payload
      };
    }
    case "SAVE_USER": {
      const newUser = action.payload;
      let newAray = [];
      if (!newUser.id) { 
        newUser.id = state.users.length + 1;
        newAray.push(newUser);
      } 
        
        
      return {
        ...state,
       users: [action.payload]
        
        
      };
    }
    case "DELETE_USER": {
      return {
        ...state
      };
    }

    default: {
      return { ...state };
    }
  }
}
