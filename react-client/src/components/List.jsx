import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div>
    <h4> Phones List </h4>
    There are { props.items.length } phones.
  </div>
)

export default List;