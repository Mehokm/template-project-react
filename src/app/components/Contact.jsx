import React from 'react';
import List from './List.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';

import $ from "jquery";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
	this.state = {people: [], showSpinner: true};
  }
  componentDidMount() {
    this.serverRequest = $.get(this.props.route.source, function (result) {
      this.setState({
        people: result,
		showSpinner: false
      });
    }.bind(this))
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
	  console.log(this.state.showSpinner)
    return (
      <div>
		{this.state.showSpinner ? <LoadingSpinner /> : <List people={this.state.people} /> }
      </div>
    );
  }
}
