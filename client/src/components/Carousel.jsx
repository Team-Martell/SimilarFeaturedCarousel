import React from 'react';
import Image from './Image.jsx';
import Arrow from './Arrow.jsx';
import styles from './../styledComp/styles.jsx';



class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      size: Math.ceil(this.props.data.length / 7)
    }
  }


  render() {
    return (
      <styles.Carousel>{this.state.size}
        <Arrow
          direction='left'
          display={false}
        />
        <styles.ImageList>
          {this.props.data.map((item, i) => {
            return (<Image data={item} key={i}/>);
          })}
        </styles.ImageList>
        <Arrow
          direction='right'
          display={true}
        />
      </styles.Carousel>
    )
  }
}

export default Carousel;