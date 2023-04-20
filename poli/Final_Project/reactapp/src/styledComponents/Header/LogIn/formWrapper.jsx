import styled from "styled-components";
import LogInContainer from "./logInContainer";
import RegistrationContainer from "./registrationContainer";

const FormWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    ${LogInContainer} {
      transition: none;
      transform: translateX(-500px);
    }

    ${RegistrationContainer}{
      transition: .18s ease;
      transform: translate(0);
    }
  }
`;

export default FormWrapper;
