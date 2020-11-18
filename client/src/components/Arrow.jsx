import React from 'react';
import styles from './../styledComp/styles.jsx';

const Arrow = (props) => {
  return (
    <styles.ArrowBoxContainer
      direction={props.direction}
      display={props.display}>
      <styles.ArrowButton>

        <styles.Arrow
          direction={props.direction}
          onClick={props.onClick}
        ></styles.Arrow>

      </styles.ArrowButton>
    </styles.ArrowBoxContainer>
  )
}

export default Arrow