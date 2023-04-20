import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  margin-top: 93px;
  padding: 30px 100px 10px 100px;

  @media (max-width: 1280px) {
    gap: 35px;
  }

  @media (max-width: 1024px) {
    align-items: start;
    padding: 30px 50px 10px 50px;
  }

  @media (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0px;
    text-align: center;
  }
`;

export default FooterWrapper;
