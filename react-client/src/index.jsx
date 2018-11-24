import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
    //this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Phone Book</h1>
      <List items={this.state.items}/>
      <Search/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));