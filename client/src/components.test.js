/**
 * @jest-environment jsdom
 *
 */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { shallow } from 'enzyme';
import Module from './Module.jsx';
import Carousel from './components/Carousel.jsx';


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
  }
]

describe('rendering components', () => {
  it('renders Module component', () => {
    const wrapper = shallow(<Carousel data={data} />);
  })
})