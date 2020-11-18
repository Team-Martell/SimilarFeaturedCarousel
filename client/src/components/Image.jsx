import React from 'react';
import styles from './../styledComp/styles.jsx';

class Image extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <styles.ProductContainer>
        <styles.Image
          src={this.props.data.imageUrl}>
        </styles.Image>
        <styles.ProductInfo>
          <styles.Price>
            {'$'.concat(this.props.data.price)}
          </styles.Price>
          <div>
            {(this.props.data.description.length < 23) ?
            this.props.data.description :
            this.props.data.description.substr(0, 22).concat('...')}
          </div>
        </styles.ProductInfo>

      </styles.ProductContainer>
    )
  }
}

export default Image;