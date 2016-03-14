import React from 'react';
// import Nav from './Nav.jsx';

// import Link from 'react-router'

export default class App extends React.Component {
  render() {
    return(
      <div className="wrapper">
        <header>
          <h1>
            Rest Test Contact List
          </h1>
          <nav>
            <ul className="navigation">
              <li>
                // <Link to="/contact">Contact</Link>
              </li>
              <li>
                // <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        // <div>
          {this.props.children}
        // </div>
      </div>
    )
  }
}
