import React from 'react'
import User from './User'

import '../assets/Products.css'

const UsersList = (props) => {
    return  props.data.map((element) => {
            return <User
                key={element.id}
                name={element.name}
                username={element.username}
                email={element.email}
            />
        })
}







export default UsersList