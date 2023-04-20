import styled from "styled-components";

const LinkStyled = styled.p`
  position: relative;
  color: rgba(23, 24, 59, 1);
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  margin-bottom: 0;

  &:hover{
    color: rgba(23, 24, 59, 1) !important;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: rgba(23, 24, 59, 1);
    border-radius: 3px;
    transform: scaleX(0);
    transition: transform 0.2s;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 1280px) {
    font-size: 20px;
  }
`;

export default LinkStyled;
