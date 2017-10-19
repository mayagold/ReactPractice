import React, { Component } from 'react';
// This imports React methods and the Component class from the React library.

import './App.css';

class Hello extends Component { //the component we're creating
  render() { // render method controls what is rendered, or displayed, to the screen.
    return ( // can only return one jsx object at a time so if you want mult lines of text they must be in a container div
      <div>
        <h1>Hello World!</h1>
        <h3>It is time for tea.</h3>
      </div>
    )
  }
}

export default Hello //exposes the Hello class to other files

// default keyword means that if we try to import anything from this file that the app can't find, JavaScript will automatically revert to importing Hello instead.

// Only one default export is allowed per file.

// React without jsx: http://jamesknelson.com/learn-raw-react-no-jsx-flux-es6-webpack/
