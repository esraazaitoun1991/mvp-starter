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

  render(){
	  return (
    <div>
      <h4> Phones List </h4>
      <div id = "input1">
      There are { this.props.items.length } phones.
      {this.props.items.map(item => (
      <div className="item" key={item.name}>{item.name}:    {item.phoneNumber}</div>
      ))}
      </div>
    </div>
    )
  }
}
export default List;