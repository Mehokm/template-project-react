import React from 'react';

import { Link } from 'react-router'

export default class Nav extends React.Component {
  render() {
    return (
		<nav>
		  <ul className="navigation">
			<li><Link to="/contact">Contact</Link></li>
			<li><Link to="/about">About</Link></li>
		  </ul>
		</nav>
    );
  }
}
