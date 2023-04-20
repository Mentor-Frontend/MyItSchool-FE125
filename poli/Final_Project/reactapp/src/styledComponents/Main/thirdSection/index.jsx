import styled from "styled-components";

const ThirdSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 90vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;

  @media (max-width: 1300px){
    max-width: 1100px;
  }

  @media (max-width: 1024px){
    min-height: 60vh;
    justify-content: center;
  }

  @media (max-width: 912px){
    min-height: 45vh;
  }
`;

export default ThirdSection;
