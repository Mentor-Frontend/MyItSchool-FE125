import FormWrapper from "../../styledComponents/Header/LogIn/formWrapper";
import LogInContainer from "../../styledComponents/Header/LogIn/logInContainer";
import LogInH2 from "../../styledComponents/Header/LogIn/logInH2";
import InputBox from "../../styledComponents/Header/LogIn/inputBox";
import LabelStyled from "../../styledComponents/Header/LogIn/label";
import InputStyled from "../../styledComponents/Header/LogIn/input";
import InputIcon from "../../styledComponents/Header/LogIn/inputIcon";
import RememberOrForgot from "../../styledComponents/Header/LogIn/rememberForgot";
import ForgonPassword from "../../styledComponents/Header/LogIn/forgotPassword";
import LogInButton from "../../styledComponents/Header/LogIn/logInButton";
import LoginRegister from "../../styledComponents/Header/LogIn/loginRegister";
import RegisterLink from "../../styledComponents/Header/LogIn/registerLink";
import LogInLink from "../../styledComponents/Header/LogIn/logInLink";
import RegistrationContainer from "../../styledComponents/Header/LogIn/registrationContainer";

export default function Form() {
  let wrapper = document.querySelector(FormWrapper);
  let registerLink = document.querySelector(RegisterLink);
  let loginLink = document.querySelector(LogInLink);

  if (registerLink) {
    registerLink.addEventListener("click", () => {
      wrapper.classList.add("active");
    });
  }

  if (loginLink) {
    loginLink.addEventListener("click", () => {
      wrapper.classList.remove("active");
    });
  }

  return (
    <FormWrapper className="formWrapper">
      <LogInContainer className="logIn">
        <LogInH2>LogIn</LogInH2>

        <form>
          <InputBox>
            <InputIcon>
              <ion-icon name="mail"></ion-icon>
            </InputIcon>
            <InputStyled name="email" type="email" required />
            <LabelStyled>Email</LabelStyled>
          </InputBox>

          <InputBox>
            <InputIcon>
              <ion-icon name="lock-closed"></ion-icon>
            </InputIcon>
            <InputStyled
              name="password"
              type="password"
              maxLength="15"
              required
            />
            <LabelStyled>Password</LabelStyled>
          </InputBox>

          <RememberOrForgot>
            <label>
              <input name="checkbox" type="checkbox" />
              Remember me
            </label>
            <ForgonPassword href="#">Forgot Password?</ForgonPassword>
          </RememberOrForgot>

          <LogInButton type="submit" value="LogIn" className="submitButton" />

          <LoginRegister>
            <p>
              Don't have an account?
              <RegisterLink className="registerLink" href="#">
                Register
              </RegisterLink>
            </p>
          </LoginRegister>
        </form>
      </LogInContainer>

      <RegistrationContainer className="register">
        <LogInH2>Registration</LogInH2>

        <form>
          <InputBox>
            <InputIcon>
              <ion-icon name="person"></ion-icon>
            </InputIcon>
            <InputStyled name="userName" type="text" maxLength="20" required />
            <LabelStyled>Username</LabelStyled>
          </InputBox>

          <InputBox>
            <InputIcon>
              <ion-icon name="mail"></ion-icon>
            </InputIcon>
            <InputStyled name="email" type="email" required />
            <LabelStyled>Email</LabelStyled>
          </InputBox>

          <InputBox>
            <InputIcon>
              <ion-icon name="lock-closed"></ion-icon>
            </InputIcon>
            <InputStyled name="password" type="password" maxLength="15" required />
            <LabelStyled>Password</LabelStyled>
          </InputBox>

          <RememberOrForgot>
            <label>
              <input name="checkbox" type="checkbox" />I agree to the terms &
              conditions
            </label>
          </RememberOrForgot>

          <LogInButton
            type="submit"
            value="Register"
            className="submitButton"
          />

          <LoginRegister>
            <p>
              Already have an account?
              <LogInLink className="loginLink" href="#">
                LogIn
              </LogInLink>
            </p>
          </LoginRegister>
        </form>
      </RegistrationContainer>
    </FormWrapper>
  );
}
