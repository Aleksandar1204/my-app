import React from 'react'
import Popup from "reactjs-popup";
import Expand_Popup from './Expand_Popup'




class User extends React.Component {
    render() {
        return (

            <div className="table-container">

                <table>


                    <tbody>
                        
                        <tr >
                            <td>{this.props.name}</td>
                            <td>{this.props.username}</td>
                            <td>{this.props.email}</td>
                            <td><Popup trigger={<button>EXPAND</button>} position="left center">
                                <div><Expand_Popup /></div>
                            </Popup>
                            </td>

                        </tr>
                    </tbody>
                </table>



            </div>
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