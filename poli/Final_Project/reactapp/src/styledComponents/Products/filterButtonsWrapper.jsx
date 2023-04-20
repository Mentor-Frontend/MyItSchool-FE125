import styled from "styled-components";

const FilterButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 150px;
  padding-left: 40px;
  max-width: 1240px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    justify-content: center;
    padding-left: 0;
  }

  @media (max-width: 1024px) {
    padding-bottom: 40px;
  }
`;
export default FilterButtonsWrapper;
