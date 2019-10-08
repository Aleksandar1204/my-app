import React from 'react'
import Popup from "reactjs-popup";
import Expand_Popup from './Expand_Popup'
import '../assets/Products.css'






class User extends React.Component {
    render() {
        return (
            <React.Fragment>
               
                   
               
                <tr>
                
            <td>{this.props.name}</td>
            <td>{this.props.username}</td>
            <td>{this.props.email}</td>
            <td><Popup trigger={<button>EXPAND</button>} position="left center">
                <div><Expand_Popup /></div>
            </Popup>
            
            </td>
            </tr>
           
            
            </React.Fragment>
        )
    }
}


/*
const User = (props) => {
return (
<React.Fragment>
            <div id='greeting' className='text'>Hello {props.name}!</div>
            <div>This is your first app</div>
        </React.Fragment>
        )
    }
    
    */

export default User