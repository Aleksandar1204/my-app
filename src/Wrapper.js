import React from 'react'
import UsersList from './UsersList'
import axios from 'axios'
import Error from './Error'



class Wrapper extends React.Component {

    //  let users =[]
    //  users= data.map(element => 
    //     {return <User  key={element.id}  first={element.Firstname} last={element.Lastname} email={element.email}/>})
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading:false

        }
    }

    componentDidMount() {
        this.setState({loading: true})
        axios.get(this.props.url)
            .then((response) => {
           
                this.setState({ data: response.data, loading :false })
            })
            .catch((error) => {
                this.setState({ data: <Error /> })
            })
    }

    render() {

        return (
            <React.Fragment>
           <this.props.component data={this.props.data}/>
           {this.state.error}
           {this.state.loading && <div>LOADING...</div>}
            </React.Fragment>
        )
    }
}

export default Wrapper