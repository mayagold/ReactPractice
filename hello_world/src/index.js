import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import Hello from './App.js';
// import registerServiceWorker from './registerServiceWorker';

var person = {
  personName: "Nick",
  personAge: 24,
  favorites: [
    "capybaras",
    "Tigers",
    "Dinosaurs count!"
  ]
}

ReactDOM.render(<Hello name={person.personName} age={person.personAge} animals={person.favorites} /> , document.getElementById('root'));
// registerServiceWorker();
