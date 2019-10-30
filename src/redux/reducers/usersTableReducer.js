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
      try {
        if (!newUser.id) {
          newAray = state.users.slice();
          newUser.id = state.users[state.users.length - 1].id + 1;
          newAray.push(newUser);
        } else {
          newAray = state.users.slice();
          for (let i = 0; i < newAray.length; i++) {
            if (newAray[i].id === newUser.id) {
              newAray.splice(i, 1, newUser);
              break;
            }
          }
        }
        alert("User succesfully added");
        return {
          ...state,
          users: newAray
        };
      } catch (error) {
        console.warn(error);
        alert("Something went wrong!");
        return {
          ...state
        };
      }

      /*   finally {
       
       }
      */
    }

    case "DELETE_USER": {
      const newUser = action.payload;
      let newAray = state.users.slice();
      try {
        for (let i = 0; i < newAray.length; i++) {
          if (newAray[i].id === newUser.id) {
            newAray.splice(i, 1);
            break;
          }
        }

        alert("User succesfully deleted");
        return {
          ...state,
          users: newAray
        };
      } catch (error) {
        console.warn(error);
        alert("Something went wrong!");
        return {
          ...state
        };
      }
    }
    default: {
      return { ...state };
    }
  }
}
