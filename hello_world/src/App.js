import React, { Component } from 'react';
// This imports React methods and the Component class from the React library.

import './App.css';

class Hello extends Component { //the component we're creating

  // what should happen when the component is first created
  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // def init state
    this.state = {
      moodPoints: 1 // initialize this.state.moodPoints to be 1
    }

  }
  increaseMood(e) {
    this.setState({
      moodPoints: this.state.moodPoints + 1
    })
  }
  render() { // render method controls what is rendered, or displayed, to the screen.
    return ( // can only return one jsx object at a time so if you want mult lines of text they must be in a container div
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>You are {this.props.age} years old.</p>
        <p>You love: {this.props.animals[0]}</p>
        // display the state
        <p>On a scale of 1-10</p>
        <p>You are this happy: {this.state.moodPoints}</p>
        <button onClick={(e) => this.increaseMood(e)}>Cheer up!</button>

      </div>
    )
  }
}

export default Hello //exposes the Hello class to other files

// default keyword means that if we try to import anything from this file that the app can't find, JavaScript will automatically revert to importing Hello instead.

// Only one default export is allowed per file.

// React without jsx: http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/
