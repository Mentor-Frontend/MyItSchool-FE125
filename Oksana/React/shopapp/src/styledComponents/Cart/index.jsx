import styled from 'styled-components'

const CartCountStyled = styled.div`
    background-color: red;
    color: white;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 18%;
    left: 86%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
   

    `

const CartCountWrapper = styled.div`
    position: relative;
    margin-right: 15px;
    `

export { CartCountStyled, CartCountWrapper};