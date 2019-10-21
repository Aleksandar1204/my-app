import React from 'react'



export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
      show: false
    }
  }

  render() {
    return (
      <React.Fragment>

<h1>asdasdas</h1>
     <p> {this.props.weather} </p> 
     
       

      </React.Fragment>

    )
  }
}
