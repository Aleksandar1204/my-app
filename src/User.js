import React from 'react'
import Popup from "reactjs-popup";
import Expand_Popup from './Expand_Popup'



class User extends React.Component {
    render() {
        return (
            <React.Fragment>
               
                   
                            <tr>
                                <td>{this.props.name}</td>
                                <td>{this.props.username}</td>
                                <td>{this.props.email}</td>
                                <td><Popup trigger={<button>EXPAND</button>} position="left center">
                                    <div><Expand_Popup/></div>
                                </Popup>

                                </td>
                            </tr>
                            
                            
                    
               

            </React.Fragment>

        )
    }
}
export default User