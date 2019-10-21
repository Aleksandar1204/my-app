import React from 'react'

import axios from 'axios'
import Error from './Error'
import '../assets/DataTable.css'



class WeatherApi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            error: null,
            show: false,
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
                <this.props.component data={this.state.data} />

                {this.state.error}
                {this.state.loading && <div>LOADING...</div>}
            </React.Fragment>
        )
    }
}

export default WeatherApi