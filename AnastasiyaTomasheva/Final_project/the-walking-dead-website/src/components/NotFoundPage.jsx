import React from 'react';
import { Link } from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';

const NotFound = styled.div`
vertical-align: middle;
text-align: center;
margin-top: 5%;
letter-spacing: 1px;
width: 100%;
font-weight: 600;
color: #efebdf;
& a{
    color: rgb(151 20 17);
    text-decoration: none;
}
@media (max-width: 1100px) {
    background-color: rgb(77 74 67 / 87%);
    width: 80%;
    margin-right: auto;
    margin-left: auto;
}

@media (max-width: 700px) {
    font-size: 1rem;
}

@media (max-width: 500px) {
    font-size: 0.7rem;
}
`

const GlobalStyle = createGlobalStyle`
body{
background-image: url('https://u.kanobu.ru/editor/images/21/f5ca4a4b-feaa-4b07-9307-e2ce2095d5bc.jpg');
background-size: cover;
background-repeat: no-repeat;
transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
@media (max-width: 1100px) {

    body {
        background-image: url('https://i.ibb.co/nmQcmYX/nigan.jpg');
    }
    
}
`

function NotFoundPage(props) {
    props.setHeader(false);
    props.setFooter(false)
    return (
        <>
        <GlobalStyle />
        <NotFound>
            Кажется, здесь уже побывала банда Нигана и всё забрала. Попытай счастья <Link to='/' onClick={() => {props.setHeader(true); props.setFooter(true)}} >снова</Link>.
        </NotFound>
        </>
    )
}

export default NotFoundPage