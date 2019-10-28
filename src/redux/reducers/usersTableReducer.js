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
        const newAray = state.users.slice();
        newUser.id = state.users.length + 1;
        newAray.push(newUser);
      } else {
        const newAray = state.users.slice();
        for (let i = 0; i < newAray.length; i++) {
          if (newAray[i].id === newUser.id) {
            newAray.splice(i, 1, newUser);
            break;
          }
        }
      }
      return {
        ...state,
        users: newAray
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
