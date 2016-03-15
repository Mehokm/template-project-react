import React from 'react';
import Card from './Card.jsx';

export default class List extends React.Component {
  render() {
    var cards = this.props.people.map((person) => {
      return (
        <Card key={person.id}
              photo={person.photo}
              name={person.name}
              occupation={person.occupation}
              description={person.description} />
      );
    });
    
    return (
      <div className="main-content">
        {cards}
      </div>
    );
  }
}
