import React from 'react'
import '../assets/Expand.css'


class Expand_Popup extends React.Component {
    constructor(props) {
      super(props)
      this.state = {username}
    }
  
    handleChange(event) {}
  
    render() {
      return (
        <div class="alert-box">
        <form>
          Username:
          <input
            type="text"
            value={this.state}
            onChange={this.handleChange}
          />
        </form>
         <div class="alert-buttons">
         <button class="cancel-button">CLOSE</button>
         <button class="delete-button">DELETE</button>
         <button class="save-button">SAVE</button>

</div>
     </div>
      )
    }
  }
   

export default Expand_Popup