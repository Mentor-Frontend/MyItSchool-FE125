import React from 'react';
import styled from 'styled-components';


const ButtonUp = styled.div`
position: fixed;
background-color: #efebdf;
right: 3%;
bottom: 2%;
border-radius: 30px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
transition: opacity 0.3s ease-in-out;
opacity: 1;
z-index: 40;

&::before{
    content: '';
    width: 25px;
    height: 25px;
    background: transparent no-repeat center center;
    background-size: 100% 100%;
    background-image: url('img/up-arrow.svg');
}

@media (hover: hover) and (pointer: fine){
    &:hover{
        background-color: #e6835b;
    }
}

@media (max-width: 700px) {
    right: 5%;
}
`

function BtnUp(props) {

    return (
        <ButtonUp onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}></ButtonUp>
    )
}

export default BtnUp