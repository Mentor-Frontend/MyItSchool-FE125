import styled from "styled-components";

const Input = styled.input`
  width: 200px;
  height: 30px;
  padding-left: 10px;

  &.long {
    width: 420px;

    @media (max-width: 426px){
    width: 320px;
  }
  }

  &.submit {
    margin-top: 14px;
    width: 100%;
    height: 40px;
    padding-left: 0;
    text-align: center;

    font-family: "Lato", sans-serif;
    font-weight: 600;
    color: #fff;
    background: rgba(58, 163, 159, 1);

    border-radius: 8px;
    font-size: 20px;
    line-height: 0;
    border: none;
  }

  @media (max-width: 426px){
    width: 150px;
  }
`;
export default Input;
