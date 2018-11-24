import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
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
    this.props.onSearch(this.state.term);
  }
  render() {
    return (
    	<div>
      <h4>Add more phone numbers!</h4>
      Enter a name: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Add Phone Number </button>
    </div>
    ) 
  }
}

export default Search;