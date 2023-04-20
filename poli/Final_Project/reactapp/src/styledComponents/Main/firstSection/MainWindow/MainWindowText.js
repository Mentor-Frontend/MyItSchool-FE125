import styled from "styled-components";

const MainWindowText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 38px 45px 40px 40px;
  height: 420px;

  @media (max-width: 1024px) {
    padding: 38px 45px 40px 40px;
  }

  @media (max-width: 426px) {
    align-items: center;
  }
`;

export default MainWindowText;
