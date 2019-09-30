import React from 'react'

import '../assets/User.css'


class User extends React.Component {
    render() {
        return (

            <React.Fragment>
              <table id="datas">  
                <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
                    
                    <tbody>
                <tr>
               <td>{this.props.key}</td>
               <td>{this.props.first}</td>
               <td>{this.props.last}</td>
               <td>{this.props.email}</td>
              </tr>
              </tbody>
              </table>
                
                
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