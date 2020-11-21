import React from 'react';
import Image from './Image.jsx';
import styles from './../styledComp/styles.jsx';

class Featured extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAlways: this.props.data.slice(0,6),
      rest: this.props.data.slice(6),
      show: false,
    }
  }

  onClick() {
    this.setState({
      show: !this.state.show,
    })
  }

  buttonText() {
    if (this.state.show) {
      return 'Show Less';
    } else {
      return `Show More (${this.props.data.slice(6).length})`;
    }
  }


  render() {
    return (
      <styles.featuredContainer>
        <styles.showAlwaysContainer>
          {this.props.data.slice(0,6).map((item, i) => {
            return (
              <Image
                data={item}
                key={i}
                featured={true}
                onClick={this.props.onClick}
              />
            );
          })}
        </styles.showAlwaysContainer>
        <styles.restContainer show={this.state.show}>
          {this.props.data.slice(6).map((item, i) => {
            return (
              <Image
                data={item}
                key={i}
                featured={true}
                onClick={this.props.onClick}
              />
            );
          })}
        </styles.restContainer>
        <styles.smButtonContainer>
          <styles.showMoreButton
            onClick={this.onClick.bind(this)}
          >{this.buttonText()}</styles.showMoreButton>
        </styles.smButtonContainer>
      </styles.featuredContainer>
    )
  }
}

export default Featured;