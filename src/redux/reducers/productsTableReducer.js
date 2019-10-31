export function productsTableReducer(state = { products : [] }, action){
    switch(action.type){
        case "WRITE_PRODUCTS":{
            return {
                ...state,
                products: action.payload
              };
        }
        case "SAVE_PRODUCT": {
            const newProduct = action.payload;
            let newAray = [];
            try {
              if (!newProduct.id) {
                newAray = state.products.slice();
                newProduct.id = state.products[state.products.length - 1].id + 1;
                newAray.push(newProduct);
              } else {
                newAray = state.products.slice();
                for (let i = 0; i < newAray.length; i++) {
                  if (newAray[i].id === newProduct.id) {
                    newAray.splice(i, 1, newProduct);
                    break;
                  }
                }
              }
              alert("User succesfully added");
              return {
                ...state,
                products: newAray
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
      
          case "DELETE_PRODUCT": {
            const newProduct = action.payload;
            let newAray = state.products.slice();
            try {
              for (let i = 0; i < newAray.length; i++) {
                if (newAray[i].id === newProduct.id) {
                  newAray.splice(i, 1);
                  break;
                }
              }
      
              alert("User succesfully deleted");
              return {
                ...state,
                products: newAray
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