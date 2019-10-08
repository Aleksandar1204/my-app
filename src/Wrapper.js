import React from 'react'

import axios from 'axios'
import Error from './Error'
import User from './User'


class Wrapper extends React.Component {

    //  let users =[]
    //  users= data.map(element => 
    //     {return <User  key={element.id}  first={element.Firstname} last={element.Lastname} email={element.email}/>})
    constructor(props) {
        super(props)
        this.state = {
            data: null

        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data.map((element) => {
                    return <User
                        key={element.id}
                        name={element.name}
                        username={element.username}
                        email={element.email}
                    />
                })
                this.setState({ data: users })
            })
            .catch((error) => {
                this.setState({ data: <Error /> })
            })
    }

    render() {

        return (
            <React.Fragment>

                    {this.props.children}
                {
                        (!this.state.data)
                        ? <h6>LOADING...</h6>
                        : this.state.data
                }

            </React.Fragment>
        )
    }
}

export default Wrapper