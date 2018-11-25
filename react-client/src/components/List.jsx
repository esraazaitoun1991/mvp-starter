import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			items:[]
		}
	}
  view(){
	  console.log(this.props.items)
  }

// Render the number of phones that saved inside database, refresh button to refresh the bage, and render the name and phone number that saved every time refreshed.
  render(){
	  return (
    <div>
      <h4> Phones List </h4>
      <div id = "input1">
      There are { this.props.items.length } phones.<form>
      <button id = "button">Refresh</button>
      </form>
      {this.props.items.map(item => (
      <div className="item" key={item.name}>{item.name}:    {item.phoneNumber}</div>
      ))}
      </div>
    </div>
    )
  }
}
export default List;