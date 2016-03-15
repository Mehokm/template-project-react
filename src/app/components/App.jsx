import React from 'react';
import Nav from './Nav.jsx';

export default class App extends React.Component {
	render() {
		return(
		  <div className="wrapper">
		    <header>
		      <h1>Rest Test Contact List</h1>
		      <Nav />
		    </header>
		    {this.props.children}
		  </div>
	 	)
	}
}
