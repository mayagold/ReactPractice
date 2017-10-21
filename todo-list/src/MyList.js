import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem';

class MyList extends Component {

  constructor (props) {
    super ()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }

  clearList(e) {
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
  // prevent button from triggering form's default submit event
  e.preventDefault()
  var toDos = this.state.toDoItemArray
  toDos.push(this.state.newItem)
  this.setState({toDoItemArray: toDos, newItem: ''})
  }

  render() {

    let todoItems = this.state.toDoItemArray.map( (item,index) => (
      <ListItem doThis={item} key={index}/>
    ))

    return (
      <div>
        <h1>To Do:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type="text"
           placeholder="Type an item here"
           onChange={(e) => this.newItemChange(e)}
           value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
      </div>
    );
  }
}

export default MyList
