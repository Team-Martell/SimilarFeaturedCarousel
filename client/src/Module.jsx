
const {React} = window;
import Carousel from './components/Carousel.jsx';
import Featured from './components/Featured.jsx';
import styles from './styledComp/styles.jsx';
import request from './request.js'



class Module extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreToConsider: [],
      mLength: 0,
      similar: [],
      sLength: 0,
      featured: []
    }
  }

  componentDidMount() {
    request.getAllData(1, (data) => {
      this.setState({
        moreToConsider: data[0],
        mLength: Math.ceil(data[0].length / 7),
        similar: data[1],
        sLength: Math.ceil(data[1].length / 7),
        featured: data[2]
      })
    })
  }

  onClick(id) {
    request.getAllData(id, (data) => {
      this.setState({
        moreToConsider: data[0],
        mLength: Math.ceil(data[0].length / 7),
        similar: data[1],
        sLength: Math.ceil(data[1].length / 7),
        featured: data[2]
      },() => {
        console.log(this.state.mLength);
      })
    });
  }



  render() {
    return(
      <styles.Module>
        <styles.Title>More to Consider</styles.Title>
        <Carousel
          data={this.state.moreToConsider}
          length={this.state.mLength}
          onClick={this.onClick.bind(this)}
        />
        <styles.Title>Similar items</styles.Title>
        <Carousel
          data={this.state.similar}
          length={this.state.sLength}
          onClick={this.onClick.bind(this)}
        />
        <styles.Title>Featured products</styles.Title>
        <Featured
          data={this.state.featured}
          onClick={this.onClick.bind(this)}
        />
      </styles.Module>
    )
  }
}

export default Module;