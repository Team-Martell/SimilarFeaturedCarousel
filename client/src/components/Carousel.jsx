import React from 'react';
import Image from './Image.jsx';
import styles from './../styledComp/styles.jsx';



class Carousel extends React.Component {
  constructor (props) {
    super(props);
  }


  render() {
    return (
      <styles.Carousel>
        {this.props.data.map((item, i) => {
          return (<Image data={item} key={i}/>);
        })}
      </styles.Carousel>
    )
  }
}

export default Carousel;