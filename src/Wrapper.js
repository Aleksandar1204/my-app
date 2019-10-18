import React from 'react'

import axios from 'axios'
import Error from './Error'
import '../assets/DataTable.css'



class Wrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: null,
            loading: false
        }
    }
    componentDidMount() {
        this.setState({ loading: true })
        axios({
            method: this.props.methodType,
            url: this.props.url
        })
            .then((response) => {
                this.setState({ data: response.data, loading: false })
            })
            .catch((error) => {
                this.setState({ data: <Error />, loading: false })
            })
    }

    render() {
        return (
            <React.Fragment>
                <div className='table-container'>
                    <table >
                        <thead>
                            <tr>
                            <th>ID</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                                <th>E-MAIL</th>
                                <th></th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        <this.props.component data={this.state.data} />
                        </tbody>
                    </table>
                </div>
                {this.state.error}
                {this.state.loading && <div>LOADING...</div>}
            </React.Fragment>
        )
    }
}

export default Wrapper