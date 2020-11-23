
const {React} = window;
import styles from './../styledComp/styles.jsx';

const IndexTracker = (props) => {

  var onClick = (e) => {
    props.onClick(e);
  }

  var arr = [];
  for (var i = 0; i < props.length; i++) {
    arr.push(
    <styles.CircleContainer>
      <styles.Circle
        index={props.index}
        id={i}
        onClick={onClick.bind(this)}>
      </styles.Circle>
    </styles.CircleContainer>
    )
  }

  return (
    <styles.IndexTracker>
      {arr.map((item) => {
        return item;
      })}
    </styles.IndexTracker>

  );
}

export default IndexTracker;