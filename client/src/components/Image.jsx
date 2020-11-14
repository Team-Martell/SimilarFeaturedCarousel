import React from 'react';
import styles from './../styledComp/styles.jsx';

class Image extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <styles.ImageContainer>
        <styles.Image
          src={this.props.data.imageUrl}>
        </styles.Image>
        <styles.Price>
          {'$'.concat(this.props.data.price)}
        </styles.Price>
        <div>{(this.props.data.description.length < 21) ?this.props.data.description : this.props.data.description.substr(0, 20).concat('...')}</div>
      </styles.ImageContainer>
    )
  }
}

export default Image;