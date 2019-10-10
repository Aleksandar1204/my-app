import React from 'react'

import axios from 'axios'
import Error from './Error'



class Wrapper extends React.Component {

    //  let users =[]
    //  users= data.map(element => 
    //     {return <User  key={element.id}  first={element.Firstname} last={element.Lastname} email={element.email}/>})
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error:null,
            loading:false

        }
    }

    componentDidMount() {
        this.setState({loading: true})
        axios({method: this.props.methodType,
                url: this.props.url})
            .then((response) => {
           
                this.setState({ data: response.data, loading :false })
            })
            .catch((error) => {
                this.setState({ data: <Error />, loading: false  })
            })
    }

    render() {

        return (
            <React.Fragment>
           <this.props.component data={this.state.data}/>
           {this.state.error}
           {this.state.loading && <div>LOADING...</div>}
            </React.Fragment>
        )
    }
}

export default Wrapper