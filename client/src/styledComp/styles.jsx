import styled from 'styled-components';

export default {
  Title: styled.h1`
  font-weight: bold;
  font-size: 24px;
  /* border: 2px solid black; */
  text-align: center;
  `,
  Carousel: styled.ul`
  display: flex;
  list-style-type: none;
  `,
  Image: styled.img`
  width: 150px;
  height: 150px;
  `,
  ImageContainer: styled.li`
  text-align: center;
  margin: 20px;
  text-decoration-line: underline;
  :hover {
    text-decoration-line: none;
    cursor: pointer
  }
  `,
  Price: styled.div`
  font-weight: bold;
  `
}


