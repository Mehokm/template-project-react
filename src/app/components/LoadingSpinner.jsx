import React from 'react';

export default class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className="spinner-wrapper">
		  <span className="spinner"><img src={require("./../images/gears.gif")}></img></span>
      </div>
    );
  }
}
