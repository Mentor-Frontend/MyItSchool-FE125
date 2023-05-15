import  styled  from 'styled-components';

const ContainerStyled = styled.div `
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    @media (max-width: 1200px) {
        max-width: 950px;
    }
    @media (max-width: 900px) {
        max-width: 700px;
    }
    @media (max-width: 700px) {
        max-width: 567px;
    }
    @media (max-width: 567px) {
        max-width: 400px;
    }
    @media (max-width: 400px) {
        max-width: 370px;
    }

`
export default ContainerStyled;