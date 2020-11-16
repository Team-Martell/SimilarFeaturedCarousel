import React from 'react';
import ReactDOM from 'react-dom';
import Module from './Module.jsx'

var data = [
  {
      "imageUrl": "http://placeimg.com/640/480/food",
      "price": 184,
      "description": "Generic Concrete Table",
      "name": "Gloves"
  },
  {
      "imageUrl": "http://placeimg.com/640/480/fashion",
      "price": 296,
      "description": "Refined Rubber Bike",
      "name": "Gloves"
  },
  {
      "imageUrl": "http://placeimg.com/640/480/people",
      "price": 412,
      "description": "Unbranded Steel Pizza",
      "name": "Gloves"
  },
  {
      "imageUrl": "http://placeimg.com/640/480/abstract",
      "price": 814,
      "description": "Small Rubber Cheese",
      "name": "Gloves"
  },
  {
      "imageUrl": "http://placeimg.com/640/480/nightlife",
      "price": 975,
      "description": "Handmade Concrete Mouse",
      "name": "Gloves"
  },
  {
      "imageUrl": "http://placeimg.com/640/480/nature",
      "price": 735,
      "description": "Fantastic Fresh Ball",
      "name": "Gloves"
  },
  {
      "imageUrl": "http://placeimg.com/640/480/nature",
      "price": 594,
      "description": "Ergonomic Metal Soap",
      "name": "Gloves"
  },
  {
      "imageUrl": "http://placeimg.com/640/480/business",
      "price": 684,
      "description": "Small Steel Towels",
      "name": "Gloves"
  },
  {
      "imageUrl": "http://placeimg.com/640/480/transport",
      "price": 829,
      "description": "Ergonomic Frozen Shoes",
      "name": "Gloves"
  },
  {
      "imageUrl": "http://placeimg.com/640/480/sports",
      "price": 688,
      "description": "Tasty Fresh Pants",
      "name": "Gloves"
  }
]

console.log(document.getElementById('app'));
ReactDOM.render(<Module data={data}/>, document.getElementById('app'));