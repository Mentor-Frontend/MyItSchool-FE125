import { createGlobalStyle } from "styled-components";

const UseGlobalStyles = createGlobalStyle({
    '*': {
        padding: 0,
        margin: 0,
    },
    a: {
        textDecoration: 'none'
    }
})

export default UseGlobalStyles;