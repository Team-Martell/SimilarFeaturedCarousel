const {React} = window;
import { StyleSheetManager } from 'styled-components'
const Component = (props) => {
  const { frameContext } = props
  return (
    <StyleSheetManager target={frameContext.document.head}>
      {props.children}
    </StyleSheetManager>
  )
}

export default Component