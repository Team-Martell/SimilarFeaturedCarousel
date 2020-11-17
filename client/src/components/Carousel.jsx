import React from 'react';
import Image from './Image.jsx';
import Arrow from './Arrow.jsx';
import styles from './../styledComp/styles.jsx';



class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      size: Math.ceil(this.props.data.length / 7),
      currentIndex: 0,
      left: false,
      right: true,
      xPosition: 0
    }
  }

  move(direction) {
    var x = this.state.xPosition;
    var dif = 1407;
    if (direction === 'left') {
      x += dif;
    } else {
      x -= dif;
    }
    this.setState({
      xPosition: x
    })
  }

  goNext() {
    var index = this.state.currentIndex;
    var length = this.state.size;
    var lastIndex = length - 1;
    if (index < lastIndex) {
      this.move('right');

      index++;
      this.setState({
        currentIndex: index,
      }, () => {
        if (this.state.currentIndex === this.state.size - 1) {
          console.log('last arrived');
          this.setState({
            right: false,
          });
        }
        if (this.state.currentIndex === 1) {
          console.log('second arrived')
          this.setState({
            left: true
          });
        }
      });
    }
  }

  goPrev() {
    var index = this.state.currentIndex;
    var length = this.state.size;
    var x = this.state.xPosition;

    if (index > 0) {
      index--;
      this.move('left');
      this.setState({
        currentIndex: index,
      }, () => {

        if (this.state.currentIndex === this.state.size - 2) {
          this.setState({
            right: true
          })
        }

        if (this.state.currentIndex === 0) {
          this.setState({
            left: false
          })
        }
      });
    }
  }


  render() {
    return (
      <styles.Carousel>
        <Arrow
          direction='left'
          display={this.state.left}
          onClick={this.goPrev.bind(this)}
          index={this.state.currentIndex}
        />
        <styles.ImageList x={this.state.xPosition}>
          {this.props.data.map((item, i) => {
            return (<Image data={item} key={i}/>);
          })}
        </styles.ImageList>

        <Arrow
          direction='right'
          display={this.state.right}
          onClick={this.goNext.bind(this)}
          index={this.state.currentIndex}
        />
      </styles.Carousel>
    )
  }
}

export default Carousel;