import React from 'react'


import '../assets/Expand.css'



class Expand_Popup extends React.Component {
  constructor(props) {
    super(props);
  this.state = {name:' '} ;
  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit() {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div class="alert-box">
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.props.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>

<div class="alert-buttons">
<button class="cancel-button">CLOSE</button>
<button class="delete-button">DELETE</button>
<button class="save-button">SAVE</button>

</div>
</div>
    );
  }
}
         
     
      
    
  
   

export default Expand_Popup