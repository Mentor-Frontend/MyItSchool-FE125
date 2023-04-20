import styled from "styled-components";

const LabelStyled = styled.label`
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);

  font-family: 'Lato', sans-serif;
  font-weight: 600;
  font-size: 1.2em;
  color: rgba(23, 24, 59, 1);

  pointer-events: none;
  transition: 0.5s;
`;

export default LabelStyled;
