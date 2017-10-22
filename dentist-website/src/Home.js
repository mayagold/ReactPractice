import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dentist Website!</h1>
        <p>Welcome. This that homepage yo.</p>
      </div>
    );
  }
}

export default Home;
