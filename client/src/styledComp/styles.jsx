import styled from 'styled-components';

const ArrowBoxContainer = styled.div `
  display: ${props => (props.display) ? 'flex' : 'none'};
  position: absolute;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  ${props => (props.direction === 'left') ? 'left: 0px; margin-left: 3px' : 'right: 0px'};
  height: 100%;
  opacity: 0;
`;

export default {
  Module:
    styled.div`
      max-width:1425px;
      margin: 0 auto;
    `,

  Title:
    styled.h1`
      font-weight: bold;
      font-size: 24px;
      /* border: 2px solid black; */
      text-align: center;
    `,

  Slider:
    styled.ul`
      margin: 20px;
      display: flex;
      list-style-type: none;
      overflow: hidden;
      position: relative;
      :hover ${ArrowBoxContainer} {
        opacity: 1;
        transition: 0.5s;
      }
    `,

  Image:
    styled.img`
      width: 185px;
      height: 185px;
    `,


  ProductContainer:
    styled.li`
      text-align: center;
      margin: 5px 0 5px 0;
      padding-right: 10px;
      height: 253px;
      width: 191px;
      text-decoration-line: underline;
      :hover {
        text-decoration-line: none;
        cursor: pointer
      }
    `,

  Price:
    styled.div`
      font-weight: bold;
    `,

  ProductInfo:
    styled.div`
      height: 44px;
      margin-top: 4px;
    `,

  ArrowBoxContainer,

  ArrowButton:
    styled.button`
      height: 40px;
      width: 40px;
      background-color: white;
      border: 2px solid black;
      border-radius: 40px;
      outline: none;
      :hover {
        cursor: pointer;
      }
    `,

  Arrow:
    styled.div`
      border: solid black;
      border-width: 0 2px 2px 0;
      margin: 0 auto;
      height: 12px;
      width: 12px;
      transform: ${props => (props.direction === 'left') ? 'rotate(135deg)' : 'rotate(-45deg)'};
    `,

  ImageList:
    styled.div`
      display: flex;
      transform: ${props => `translateX(${props.x}px)`};
      transition: .5s;
    `,

  IndexTrackerContainer:
    styled.div`
    `,

  IndexTracker:
    styled.ul`
      display: flex;
      width: fit-content;
      margin: 0 auto;
      list-style-type: none;
    `,

  CircleContainer:
    styled.li`
    width: 20px;
    height: 20px;
    position: relative;
    `,

  Circle:
    styled.button`
      outline: none;
      :hover {
        cursor: pointer;
      }
      position: absolute;
      top: 5px;
      left: 5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid rgb(136, 136, 136);
      text-align: center;
      transition: background-color 200ms ease-in 0s;
      background: ${props => (props.index == props.id) ?
     ' rgb(136, 136, 136)' :
      'rgb(255, 255, 255)'};
      -webkit-font-smoothing: antialiased
    `,
}


