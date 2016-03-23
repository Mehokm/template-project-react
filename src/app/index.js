import './styles/main.css'

import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import App from './components/App.jsx';

import React from 'react';
import ReactDOM from 'react-dom';


import { Router, Route, IndexRedirect, hashHistory } from 'react-router'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
	  <IndexRedirect to="/contact"/>
      <Route path="/contact" source="/api/v1/people" component={Contact}/>
	  <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
