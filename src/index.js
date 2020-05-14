import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
//import Card from './Card';
//import Cardlist from './Cardlist';
//import {robots }from './robots';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 <App/>,
  document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with som  pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
