import React from 'react';
import styles from './../styledComp/styles.jsx';
/**
 * Component for rendering the arrow xd
 *
 * @component
 * @example
 * const direction = 'left'
 * const display = true
 * const onClick = () => {console.log('clicked')}
 * return (
 * <Arrow direction={direction} display={true} onClick={onClick}/>
  )
 */

 /**
  *
  * @param {*} props
  */
const Arrow = (props) => {
  return (
    <styles.ArrowBoxContainer
      direction={props.direction}
      display={props.display}
    >
      <styles.ArrowButton
        onClick={props.onClick}
      >
        <styles.Arrow
          direction={props.direction}
        ></styles.Arrow>

      </styles.ArrowButton>
    </styles.ArrowBoxContainer>
  )
}

export default Arrow