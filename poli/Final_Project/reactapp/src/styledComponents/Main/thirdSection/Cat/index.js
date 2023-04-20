import styled from "styled-components";

const Cat = styled.img`
  float: right;
  max-width: 440px;

  @media (max-width: 1024px){
    display: none;
  }
`;

export default Cat;
