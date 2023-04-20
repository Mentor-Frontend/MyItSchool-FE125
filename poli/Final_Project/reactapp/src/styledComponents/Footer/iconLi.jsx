import styled from "styled-components";

const IconLi = styled.li`
  display: inline;
  margin: 10px 20px;
  padding: 0;
  font-size: 30px;
  list-style: none;

  @media (max-width: 1280px) {
    margin: 10px 17px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    margin: 10px 10px;
  }
`;

export default IconLi;
