export function writeProductsToStore(data){
    return{
        type:'WRITE_PRODUCTS',
        payload:data
    }
}

export function addProductToStore(product) {
    return {
      type: "SAVE_PRODUCT",
      payload: product
    };
  }

  export function removeProductToStore(data) {
    return {
      type: "DELETE_PRODUCT",
      payload: data
    };
  }