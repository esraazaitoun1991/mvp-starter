import React from 'react';
import $ from 'jquery';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'Esraa',
			phone:'078025'
		},
		this.onChange = this.onChange.bind(this),
    this.search = this.search.bind(this)
	}
  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }
  search() {
    this.props.onSearch(this.state);
  }
  render() {
    return (
    	<div>
      <h4>Add more to phone book</h4>
      Enter the name: <input id='name' value={this.state.name} onChange={this.onChange.bind(this)}/>       
      Enter the phone number: <input id='phone' value={this.state.phone} onChange={this.onChange.bind(this)}/>  
      <button onClick={this.search.bind(this)}> Add To Phone Book </button>
    </div>
    ) 
  }
}

export default Search;