import React from 'react'







export default class Weather extends React.Component {
  constructor() {
    super()
    this.state = {
     
      show: false
    }
  }

  render() {
    return (
      <React.Fragment>

<h1>asdasdas</h1>
      {this.props.data}
       

      </React.Fragment>

    )
  }
}
