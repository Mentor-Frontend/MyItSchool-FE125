import styled from "styled-components";

const ImageLogo = styled.img`
  margin-left: 47px;
  margin-bottom: 15px;
  border-radius: 10px;

  @media (max-width: 1280px) {
    margin-left: 38px;
  }

  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media (max-width: 912px) {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 182px;
    margin-left: 28px;
  }
`;

export default ImageLogo;
