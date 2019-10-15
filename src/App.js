import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './Components/User'
import Login from './Components/login'



class App extends Component {
  render() {
    return (
      <div className="App">
      <img src = {logo}/>
        
      <User/>
      <Login/>
      </div>
    );
  }
}

export default App;
