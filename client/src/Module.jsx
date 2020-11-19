import React from 'react';
import Carousel from './components/Carousel.jsx';
import Featured from './components/Featured.jsx';
import styles from './styledComp/styles.jsx';



class Module extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return(
      <styles.Module>
        <styles.Title>More to Consider</styles.Title>
        <Carousel data={this.props.data}/>
        <styles.Title>Similar items</styles.Title>
        <Carousel data={this.props.data}/>
        <styles.Title>Featured products</styles.Title>
        <Featured data={this.props.data}/>
      </styles.Module>
    )
  }
}

export default Module;