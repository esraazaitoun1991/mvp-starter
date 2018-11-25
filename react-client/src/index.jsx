import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      phones: []
    }
    this.Search = this.Search.bind(this)
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


  Search(data){
    console.log("we are in the father APP",data.name,data.phone)
    var a=this.state.phones
    a.push(data)
    this.setState({phones: a});
  }

  render () {
    return (<div>
      <h1>Phone Book</h1>
      <List items={this.state.phones}/>
      <Search onSearch={this.Search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));