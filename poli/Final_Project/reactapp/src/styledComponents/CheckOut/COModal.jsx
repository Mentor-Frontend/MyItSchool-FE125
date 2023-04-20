import styled from "styled-components";

const COModal = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 15;
    background: #0000006e;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    pointer-events: none;
    transition: 0.5s;

    &.active{
        opacity: 1;
        pointer-events: all;
    }
`

export default COModal;