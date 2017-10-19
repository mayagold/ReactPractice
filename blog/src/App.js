import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Load in Comment component
import Comment from './Comment.js';
import Author from './Author.js';

class Post extends Component {
  render() {


    let authors = this.props.allAuthors.map( (author,index) => (
      <Author author={author} key={index} />
    ))

    return (
      <div className="post">
        <h1>{this.props.title}</h1>
        {authors}
        <p>{this.props.body}</p>
        <Comment body={this.props.comments[0]}/>
      </div>
    );
  }
}

export default Post;
