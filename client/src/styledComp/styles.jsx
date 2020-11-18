import styled from 'styled-components';

export default {

  Title:
    styled.h1`
      font-weight: bold;
      font-size: 24px;
      /* border: 2px solid black; */
      text-align: center;
    `,

  Carousel:
    styled.ul`
      margin: 20px;
      display: flex;
      list-style-type: none;
      overflow: hidden;
      position: relative;
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

  ArrowBoxContainer:
    styled.div `
      display: ${props => (props.display) ? 'flex' : 'none'};
      position: absolute;
      align-items: center;
      top: 50%;
      transform: translateY(-50%);
      ${props => (props.direction === 'left') ? 'left: 0px' : 'right: 0px'};
      height: 100%;
      opacity: 0;
      :hover {
        opacity: 1;
        transition: 0.5s;
      }
    `,

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
      z-index: -1;
      transition: .5s;
    `
}


