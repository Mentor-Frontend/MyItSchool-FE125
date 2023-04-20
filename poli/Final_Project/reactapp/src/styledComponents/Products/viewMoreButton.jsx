import styled from "styled-components";

const ViewMoreButton = styled.button`
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  color: rgba(23, 24, 59, 1);
  text-decoration: none;

  transition: 200ms;

  border: 2px solid rgba(23, 24, 59, 1);
  background: #fff;
  border-radius: 15px;
  width: 100px;
  height: 40px;
  cursor: pointer;

  &:hover {
    background: rgba(23, 24, 59, 1);
    color: #fff;
  }

  &:active {
    background: rgba(23, 24, 59, 1) !important;
    color: #fff !important;
  }
`;

export default ViewMoreButton;
