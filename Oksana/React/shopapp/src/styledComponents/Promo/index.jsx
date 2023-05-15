import styled from "styled-components";

export const PromoStyled = styled.div `
    position: relative;
    /* top: -50px; */
    max-width: 1280px;
    z-index: 1;
    max-height:600px;
    /* @media (max-width: 700px) { */
        /* top: -110px; */
    /* }
    
    @media (max-width: 567px) {
        top: -220px;
    } */
`
export const PromoSpan = styled.span `
    font-weight: 400;
    font-size: 64px; 
    line-height: 78px; 
    color: #FFFFFF; 
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);

    @media (max-width: 700px) {
        font-size: 50px; 
        line-height: 60px; 
      }
    
    @media (max-width: 567px) {
        font-size: 40px; 
        line-height: 50px; 
  
    } 
`

export const PromoDiv = styled.div `

    transform: translateY(-464px);
    max-width:70%;
    text-align: center;
    margin-left: auto;
    margin-right: auto; 
    width: auto;
    display: block;
    @media (max-width: 700px) {
        transform: translateY(-460px); 
      }
    
    @media (max-width: 567px) {
        transform: translateY(-350px); 
  
    } 


`

