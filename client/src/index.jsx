import React from 'react';
import ReactDOM from 'react-dom';
import Module from './Module.jsx'

var data = [

    {
        "id": 1,
        "imageUrl": "http://placeimg.com/640/480/food",
        "price": 699,
        "description": "Fantastic Metal Soap",
        "name": "Computer"
    },
    {
        "id": 9,
        "imageUrl": "http://placeimg.com/640/480/fashion",
        "price": 582,
        "description": "Handcrafted Frozen Salad",
        "name": "Computer"
    },
    {
        "id": 34,
        "imageUrl": "http://placeimg.com/640/480/technics",
        "price": 341,
        "description": "Practical Rubber Pizza",
        "name": "Computer"
    },
    {
        "id": 9,
        "imageUrl": "http://placeimg.com/640/480/fashion",
        "price": 582,
        "description": "Handcrafted Frozen Salad",
        "name": "Computer"
    },
    {
        "id": 34,
        "imageUrl": "http://placeimg.com/640/480/technics",
        "price": 341,
        "description": "Practical Rubber Pizza",
        "name": "Computer"
    },
    {
        "id": 9,
        "imageUrl": "http://placeimg.com/640/480/fashion",
        "price": 582,
        "description": "Handcrafted Frozen Salad",
        "name": "Computer"
    },
    {
        "id": 34,
        "imageUrl": "http://placeimg.com/640/480/technics",
        "price": 341,
        "description": "Practical Rubber Pizza",
        "name": "Computer"
    },
    {
        "id": 9,
        "imageUrl": "http://placeimg.com/640/480/fashion",
        "price": 582,
        "description": "Handcrafted Frozen Salad",
        "name": "Computer"
    },
    {
        "id": 34,
        "imageUrl": "http://placeimg.com/640/480/technics",
        "price": 341,
        "description": "Practical Rubber Pizza",
        "name": "Computer"
    },
    {
        "id": 9,
        "imageUrl": "http://placeimg.com/640/480/fashion",
        "price": 582,
        "description": "Handcrafted Frozen Salad",
        "name": "Computer"
    },
    {
        "id": 34,
        "imageUrl": "http://placeimg.com/640/480/technics",
        "price": 341,
        "description": "Practical Rubber Pizza",
        "name": "Computer"
    }
]

ReactDOM.render(<Module data={data}/>, document.getElementById('app'));