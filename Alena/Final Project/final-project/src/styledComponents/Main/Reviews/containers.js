import styled from "styled-components";

const MainContainer = styled.div`
    max-width: 1066px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 80px;
    margin-bottom: 80px;
    @media(max-width: 1156px){
        max-width: 712px;
    }
    @media(max-width: 872px){
        max-width: 445px;
    }
    @media(max-width: 525px){
        max-width: 330px;
    }
    @media(max-width: 391px){
        max-width: 245px;
    }
    @media(max-width: 300px){
        max-width: 196px;
    }
`
const ImgReviews = styled.img`
    width: 335px;
`

export { MainContainer, ImgReviews}