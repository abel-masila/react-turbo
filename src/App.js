import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
    super(props);
    var config={
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);

  }
  render(){
    return(
      <div>
        <Header title="React App with Firebase"/>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
          <MessageList db={firebase}/>
          </div>
        </div> 
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
          <MessageBox db={firebase}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
