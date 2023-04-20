import styled from "styled-components";

const MainContainer = styled.div`
    max-width: 600px;
    margin-left: 60px;

    @media (max-width: 1280px) {
        margin-left: 20px;
    }

    @media(max-width: 912px) {
        margin-left: 50px;
    }

    @media(max-width: 426px) {
        margin-left: 0px;
    }
`

export default MainContainer;