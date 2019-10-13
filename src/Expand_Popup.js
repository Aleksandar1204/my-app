import React from 'react'
import '../assets/Expand.css'

class Expand_Popup extends React.Component {

  
  render(){
  return (
    <React.Fragment>
    <div class="alert-box">

      <p class="p-header">Delete Product</p>
      <p>You are about to delete this product. Are you sure you wish to continue? </p>
      <div class="alert-buttons">
        <button class="cancel-button">CANCEL</button>
        <button class="delete-button">DELETE</button>
      </div>
    </div>
    </React.Fragment>
  )
}
}
export default Expand_Popup