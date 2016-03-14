import './styles/main.css'

import Contact from './components/Contact.jsx';
import App from './components/App.jsx';

import React from 'react';
import ReactDOM from 'react-dom';


import { Router, Route, Link, hashHistory } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('app'))
