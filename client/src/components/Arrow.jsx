const {React} = window;
import styles from '../styledComp/styles.jsx';
/**
 * Component for rendering the arrow
 *
 * @component
 * @example
 * const direction = 'right'
 * const display = true
 * return (
 * <Arrow
    direction='left'
    display={display}
    test={display}
  />
  )
 */


const Arrow = (props) => {
  return (
    <styles.ArrowBoxContainer
      direction={props.direction}
      display={props.display}
      test={props.test}
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