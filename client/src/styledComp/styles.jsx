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
      display: flex;
      list-style-type: none;
    `,

  Image:
    styled.img`
      width: 150px;
      height: 150px;
    `,


  ImageContainer:
    styled.li`
      text-align: center;
      margin: 20px;
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

  ArrowBoxContainer:
    styled.div `
      display: ${props => (props.display) ? 'flex' : 'none'};
      align-items: center;
      border: 1px solid green;
    `,

  ArrowBox:
    styled.button`
      height: 40px;
      width: 40px;
      background-color: white;
      border: 2px solid black;
      border-radius: 40px;
      outline: none;
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
      border: 1px solid red;
    `
}


