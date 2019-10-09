import React from 'react'
import Popup from "reactjs-popup";
import Expand_Popup from './Expand_Popup'


const User = () => {
    return(
        
        <table>
            <tbody>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.username}</td>
                <td>{this.props.email}</td>
                <td><Popup trigger={<button>EXPAND</button>} position="left center">
                <div><Expand_Popup /></div>
            </Popup>
            
            </td>
            </tbody>
        </table>
      
    )
}

export default User