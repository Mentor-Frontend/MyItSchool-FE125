import styled from "styled-components";

const Circle = styled.img`
  display: none;
  float: right;

  @media (max-width: 1024px){
    display: block;
    max-width: 440px;
    z-index: -1;
  }

  @media (max-width: 426px) {
    max-width: 300px;
  }
`;

export default Circle;
