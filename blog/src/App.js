import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Load in Comment component
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {

  constructor (props) {
    // make call to parent class' (Component) constructor
    super()
    // def init state
    this.state = {
      body: props.body // initialize this.state.moodPoints to be 1
    }
  }

  changeBody(e) {
    this.setState({
      body: e.target.value
    })
  }

  render() {

    let authors = this.props.allAuthors.map( (author,index) => (
      <Author author={author} key={index} />
    ))

    return (
      <div className="post">
        <h1>{this.props.title}</h1>
        {authors}
        <p>{this.state.body}</p>
        <Comment body={this.props.comments[0]}/>
        <input type="text"onChange={(e) => this.changeBody(e)}></input>
      </div>
    );
  }
}

export default Post;
