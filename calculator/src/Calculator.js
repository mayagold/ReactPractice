import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {

  constructor (props) {
    super (props)
    // This binding is necessary to make `this` work in the callback
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
    this.multiply = this.multiply.bind(this)
    this.divide = this.divide.bind(this)

    this.state = {
      solution: 0
    }
  }

  add() {
    var sum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0);

    this.setState({
      solution: sum
    })
  }

  subtract() {
    var diff = (parseInt(this.refs.val1.value) || 0) - (parseInt(this.refs.val2.value) || 0);

    this.setState({
      solution: diff
    })
  }

  multiply() {
    var product = (parseInt(this.refs.val1.value) || 0) * (parseInt(this.refs.val2.value) || 0);

    this.setState({
      solution: product
    })
  }

  divide() {
    var quotient = (parseInt(this.refs.val1.value) || 0) / (parseInt(this.refs.val2.value) || 0);

    this.setState({
      solution: quotient
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
           <input type="text" ref="val1"/>
           <span>+</span>
           <input type="text" ref="val2"/>
           <span>=</span>
           <button onClick={this.add}>Add</button>
           <button onClick={this.subtract}>Subtract</button>
           <button onClick={this.multiply}>Multiply</button>
           <button onClick={this.divide}>Divide</button>
           <h3>{this.state.solution}</h3>
        </div>
      </div>
    );
  }
}

export default Calculator;
