import styled from "styled-components";

const PagesLi = styled.li`
  text-align: left;
  margin-bottom: 8px;
  padding: 0;
  font-size: 20px;
  list-style: none;

  @media (max-width: 912px) {
    font-size: 13px;
  }

  @media (max-width: 426px) {
    text-align: center;
  }
`;

export default PagesLi;
