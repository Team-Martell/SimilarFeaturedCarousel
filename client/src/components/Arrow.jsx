import React from 'react';
import styles from './../styledComp/styles.jsx';

class Arrow extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      display: this.props.display
    }
  }

  render() {
    return (
      <styles.ArrowBoxContainer
      display={this.state.display}>
        <styles.ArrowBox>
          <styles.Arrow
          direction={this.props.direction}>
          </styles.Arrow>
        </styles.ArrowBox>
      </styles.ArrowBoxContainer>
    )
  }
}

export default Arrow