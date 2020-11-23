
const {React} = window;
import styles from './../styledComp/styles.jsx';

class Image extends React.Component {
  constructor(props) {
    super(props)
  }
  onClick(e) {
    var id = e.target.id;
    this.props.onClick(id)
  }

  render() {
    return (
      <styles.ProductContainer
        id={this.props.data.id}
        featured={this.props.featured}
        onClick={this.onClick.bind(this)}
      >
        <styles.Image
          id={this.props.data.id}
          src={this.props.data.imageUrl}>
        </styles.Image>
        <styles.ProductInfo>
          <styles.Price
            id={this.props.data.id}
          >
            {`$${this.props.data.price.toFixed(2)}`}
          </styles.Price>
          <div
            id={this.props.data.id}
          >
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