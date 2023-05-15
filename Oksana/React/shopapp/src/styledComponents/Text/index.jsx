import styled from "styled-components";


const TextStyled=styled.p `
    font-size: ${(props)=>{props.FontSize}};
    color: ${({cl})=>{ cl }};

`
export default TextStyled;