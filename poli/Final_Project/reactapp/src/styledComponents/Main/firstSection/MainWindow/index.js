import styled from "styled-components";

const MainWindow = styled.div`
  max-width: 650px;
  min-height: 450px;
  background: #fff;
  border-radius: 10px;
  margin-right: 90px;

  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 610px;
    min-height: 400px;
    margin-right: 50px;
  }

  @media (max-width: 426px) {
    max-width: 300px;
    min-height: 250px;
  }

  @media (max-width: 321px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export default MainWindow;
