import { createGlobalStyle } from "styled-components";

const UseGlobalStyles = createGlobalStyle({
    '*': {
        padding: 0,
        margin: 0,
    },
    a: {
        textDecoration: 'none',
        color: '#4A4A4A',
    },
    p: {
        margin: '0',
        padding: '0',
    },
    h3: {
        marginBottom: '0',
    },
})

export default UseGlobalStyles;