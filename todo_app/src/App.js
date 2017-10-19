import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';
import Numbers from './Numbers.js';

const todos = [ 'feed turtle', 'ask for change', 'deliver pizza', 'go swimming', 'smoke weed' ];

const numbers = [ 4, 8, 15, 16, 23, 42 ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> To Do </h1>
          <List todos = {todos}/>
          <Numbers nums={numbers}/>
      </div>
    );
  }
}

export default App;
