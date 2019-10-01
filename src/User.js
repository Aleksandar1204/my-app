import React from 'react'



// import '../assets/User.css'


class User extends React.Component {
    render() {
        return (
            
            <div>
                <table>

                    <tr>
                        <td>{this.props.key}</td>
                        <td>{this.props.first}</td>
                        <td>{this.props.last}</td>
                        <td>{this.props.email}</td>
                        <td>button</td>
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