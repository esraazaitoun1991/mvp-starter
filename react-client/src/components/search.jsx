import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phoneNumber:''
		}
	}
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  saveNewPhone() {
    this.props.saveNewPhone(this.state);
  }
  // Render the input text and the button, first input text for name and the seconde one for phone number. The button when clicked it send the inputs to the server.
  render() {
    return (
    	<div>
      <h4>Add more to phone book</h4>
      <div id="input1">
      Enter the name: <input name="name" value={this.state.name} onChange={this.onChange.bind(this)}/>       
      Enter the phone number: <input  name="phoneNumber" value={this.state.phoneNumber}  onChange={this.onChange.bind(this)}/>  
      <button id = "button"  onClick={this.saveNewPhone.bind(this)}> Add To Phone Book </button>
      </div>
    </div>
    ) 
  }
}

export default Search;