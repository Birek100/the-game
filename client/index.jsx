require('./styles.scss')

import img from './background.jpg';
import React from 'react';
import ReactDOM from 'react-dom'; 

const name = 'React';
ReactDOM.render(
  <h1>Hello {name}!</h1>,
  document.getElementById('root')
);
