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
          phones: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  // POST request to take the data(name and phone number) from the input text, and send it to the server.
  addToPhone (term) {
    console.log(term);
    $.ajax({
      type: 'POST',
      url:'/items',
      contentType: 'application/json',
      data: JSON.stringify({phones: term}),
      success: (data) =>{
        console.log("data",data);
         this.setState({phones: data});
      }
    })
  }
  Search(data){
    console.log("we are in the father APP",data.name,data.phoneNumber)
    var a=this.state.phones
    a.push(data)
    this.setState({phones: a});
  }

  render () {
    return (<div>
      <h1>Phone Book</h1>
      <List items={this.state.phones} y="lll" d="nana"/>
      <Search saveNewPhone={this.addToPhone}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));