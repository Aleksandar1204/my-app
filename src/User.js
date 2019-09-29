import React from 'react'
import '../assets/User.css'

class User extends React.Component {
    render() {
        return (

            <React.Fragment>
                <div>
                    <table id="data">
                    <tbody>
                <tr>
               <td>{this.props.id}</td>
               <td>{this.props.name}</td>
               <td>{this.props.email}</td>
              </tr>
              </tbody>
              </table>
                </div>
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