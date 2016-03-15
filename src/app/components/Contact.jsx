import React from 'react';
import List from './List.jsx';

import $ from "jquery";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
	this.state = {people: []};
  }
  componentDidMount() {
    this.serverRequest = $.get(this.props.route.source, function (result) {
      this.setState({
        people: result
      });
    }.bind(this))
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }
  render() {
    return (
      <div>
        <List people={this.state.people} />
      </div>
    );
  }
}
