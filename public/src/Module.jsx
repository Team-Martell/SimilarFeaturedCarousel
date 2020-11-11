import React from 'react';
import Carousel from './components/Carousel.jsx';

class Module extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className="carouselTitle">More to Consider</div>
        <Carousel />
        <div className="carouselTitle">Similar items</div>
        <Carousel />
        <div className="carouselTitle">Featured products</div>
      </div>
    )
  }
}

export default Module;