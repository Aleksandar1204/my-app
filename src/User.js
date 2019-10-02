import React from 'react'



import '../assets/User.css'


class User extends React.Component {
    render() {
        return (
            
            <div>
                <table id='datas'>

                    <tr >
                        <td>{this.props.key}</td>
                        <td>{this.props.name}</td>
                        <td>{this.props.username}</td>
                        <td>{this.props.email}</td>
                        
                        
                    </tr>

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