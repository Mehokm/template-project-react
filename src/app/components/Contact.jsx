import React from 'react';
import List from './List.jsx';

let people = [
  {
    "id": 1,
    "name": "Moe",
    "occupation": "Awesome Software Engineer",
    "description": "Unde laudantium temporibus nostrum autem deserunt? Optio, enim repellat. Molestiae?",
    "photo": "moe.png"
  }, {
    "id": 2,
    "name": "Larry",
    "occupation": "Designer \u0026 Developer",
    "description": "Odit nobis cupiditate velit, doloribus ullam fugiat placeat totam perferendis.",
    "photo": "larry.png"
  }, {
    "id": 3,
    "name": "Curly",
    "occupation": "Software Engineer, Ferret Owner",
    "description": "Quidem, obcaecati, aliquam! Hic, veritatis dolorem omnis adipisci iusto, laudantium!",
    "photo": "curly.png"
  }
];

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <List people={people} />
      </div>
    );
  }
}
