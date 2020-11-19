import React from 'react';
import Carousel from './components/Carousel.jsx';
import Featured from './components/Featured.jsx';
import styles from './styledComp/styles.jsx';
import request from './request.js'



class Module extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreToConsider: this.props.moreToConsider,
      similar: this.props.similar,
      featured: this.props.featured
    }
  }

  onClick(id) {
    request.getAllData(id, (data) => {
      this.setState({
        moreToConsider: data[0],
        similar: data[1],
        featured: data[2]
      })
    });
  }



  render() {
    return(
      <styles.Module>
        <styles.Title>More to Consider</styles.Title>
        <Carousel
          data={this.state.moreToConsider}
          onClick={this.onClick.bind(this)}
        />
        <styles.Title>Similar items</styles.Title>
        <Carousel
          data={this.state.similar}
          onClick={this.onClick.bind(this)}
        />
        <styles.Title>Featured products</styles.Title>
        <Featured
          data={this.state.featured}
          onClick={this.onClick.bind(this)}
        />
      </styles.Module>
    )
  }
}

export default Module;