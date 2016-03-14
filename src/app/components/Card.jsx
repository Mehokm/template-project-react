import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <article className="contact-card">
        <img src={require("./../images/" + this.props.photo)} alt=""/>
        <ul>
          <li className="name">{this.props.name}</li>
          <li>
            <em>{this.props.occupation}</em>
          </li>
          <li>{this.props.description}</li>
        </ul>
      </article>
    );
  }
}
