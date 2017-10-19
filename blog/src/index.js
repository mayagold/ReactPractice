import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

var post = {
  title: "This is Life",
  authors: ["Human", "alien"],
  body: "Life is good",
  comments: [
    "Yes",
    "No",
    "Maybe"
  ]
}

ReactDOM.render(<Post title={post.title} allAuthors={post.authors} body={post.body} comments={post.comments} />, document.getElementById('root'));
registerServiceWorker();
