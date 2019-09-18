import React from 'react'
import data from './data.js'
import User from './User'

export default class Wrapper extends React.Component {
    render(){
     let users =[]
     users= data.map(element => 
        {return <User key={element.id} name={element.name} email={element.email}/>})
    
        return(users)
    }
}