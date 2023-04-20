import styled from "styled-components";

const FilterButton = styled.li`
  display: inline;
  margin: 0 15px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  color: rgba(23, 24, 59, 1);
  text-decoration: none;
  list-style: none;

  transition: 200ms;

  border: none;
  background: #fff;
  border-radius: 15px;
  padding: 8px 10px;
  cursor: pointer;

  &:hover {
    background: rgba(23, 24, 59, 1);
    color: #fff;
  }

  &.active {
    background: rgba(23, 24, 59, 1) !important;
    color: #fff !important;
  }

  @media (max-width: 1280px) {
    padding: 10px 13px;
    font-size: 20px;
  }

  @media (max-width: 1024px) {
    padding: 10px 13px;
    font-size: 22px;
  }

  @media (max-width: 912px) {
    font-size: 16px;
  }
`
export default FilterButton;
