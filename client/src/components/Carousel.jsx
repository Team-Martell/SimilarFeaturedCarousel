import React from 'react';
import Image from './Image.jsx';
import Arrow from './Arrow.jsx';
import IndexTracker from './IndexTracker.jsx';
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

  move(n) {
    var x = this.state.xPosition;
    var dif = 1407 * n;
    x += dif;
    this.setState({
      xPosition: x
    })
  }

  turnOn(state) {
    this.setState({
      [state]: true
    });
    console.log(`turn on ${state}`)
  }
  turnOff(state) {
    this.setState({
      [state]: false
    });
    console.log(`turn off ${state}`)
  }

  goNext() {
    var index = this.state.currentIndex;
    var length = this.state.size;
    var lastIndex = length - 1;
    if (index < lastIndex) {
      this.move(-1);
      index++;
      this.setState({
        currentIndex: index,
      }, () => {
        if (this.state.currentIndex === this.state.size - 1) {
          this.turnOff('right');
        }
        if (this.state.currentIndex === 1) {
          this.turnOn('left');
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
      this.move(1);
      this.setState({
        currentIndex: index,
      }, () => {

        if (this.state.currentIndex === this.state.size - 2) {
          this.turnOn('right');
        }

        if (this.state.currentIndex === 0) {
          this.turnOff('left');
        }
      });
    }
  }

  onCircleClick(e) {
    var length = this.state.size;
    var x = this.state.xPosition;
    var index = e.target.id;
    var dif = this.state.currentIndex - index;

    this.move(dif);
    this.setState({
      currentIndex: index
    });
    console.log('current index', index);
    if (index == 0) {
      this.turnOff('left');
    } else {
      this.turnOn('left');
    }

    if (index == length - 1) {
      this.turnOff('right');
    } else {
      this.turnOn('right');
    }

  }

  render() {
    return (
      <div>
        <styles.Slider>

            <styles.ImageList x={this.state.xPosition}>
              {this.props.data.map((item, i) => {
                return (<Image data={item} key={i}/>);
              })}
            </styles.ImageList>
            <Arrow
              direction='left'
              display={this.state.left}
              onClick={this.goPrev.bind(this)}
              index={this.state.currentIndex}
            />
            <Arrow
              direction='right'
              display={this.state.right}
              onClick={this.goNext.bind(this)}
              index={this.state.currentIndex}
            />
        </styles.Slider>
        <styles.IndexTrackerContainer>
          <IndexTracker
            length={this.state.size}
            index={this.state.currentIndex}
            onClick={this.onCircleClick.bind(this)}
          />
        </styles.IndexTrackerContainer>
      </div>
    )
  }
}

export default Carousel;