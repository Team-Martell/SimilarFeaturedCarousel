import React from 'react';
import ReactDOM from 'react-dom';
import Module from './Module.jsx'

var data = [ {
  imageUrl: "http://placeimg.com/640/480/food",
  price: 12,
  description: "Coffe Maker",
  name: "Gloves"
  }, {
  imageUrl: "http://placeimg.com/640/480/food",
  price: 123,
  description: "Generic Concrete Table",
  name: "Gloves"
  }
]

console.log(document.getElementById('app'));
ReactDOM.render(<Module data={data}/>, document.getElementById('app'));