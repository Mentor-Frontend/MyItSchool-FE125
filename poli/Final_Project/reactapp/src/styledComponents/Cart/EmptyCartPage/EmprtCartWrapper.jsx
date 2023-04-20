import styled from "styled-components";

const EmptyCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding-top: 120px;
  }
`

export default EmptyCartWrapper;
