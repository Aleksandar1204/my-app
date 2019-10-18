import React from 'react'
import Popup from "reactjs-popup";
import '../assets/Expand.css'




class User extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          show: false
      }
    }

    render() {
        return (
            <React.Fragment>
               
                   
                            <tr>
                            <td>{this.props.id}</td>
                                <td>{this.props.name}</td>
                                <td>{this.props.username}</td>
                                <td>{this.props.email}</td>
                                <td><Popup trigger={<button>EXPAND</button>} position="left center">
                                    
                                        <div class="alert-box">
<form>

  <label className="text-field-label">Name</label> <br/>
 <input type='text' className="text-field-input" defaultValue={this.props.name}></input>
 <br/><br/>
  <label className="text-field-label">Username</label> <br/>
 <input type='text' className="text-field-input" defaultValue={this.props.username}></input>
 <br/><br/>
  <label className="text-field-label">E-mail</label> <br/>
 <input type='text' className="text-field-input" defaultValue={this.props.email}></input>
 <br/><br/>
</form>

      <div class="alert-buttons">
        <button class="cancel-button" >SAVE</button>
        <button class="delete-button">DELETE</button>
      </div>
    </div>
    
                                </Popup>

                                </td>
                            </tr>
                            
                            
                    
               

            </React.Fragment>

        )
    }
}
export default User