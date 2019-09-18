import React from 'react'

class User extends React.Component {
    render () {
        return (
            
            <React.Fragment>
            <div>
            
            <p>{this.props.name}</p>
            
            <p>{this.props.email}</p>
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