import styled from "styled-components";
import main from "../../../components/Main/img/main.jpg";

const FirstSection = styled.section`
  margin-top: 95px;
  min-height: 690px;
  background: url(${main}) no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    min-height: 505px;
  }

  @media (max-width: 321px) {
    margin-top: 70px;
  }
`;

export default FirstSection;
