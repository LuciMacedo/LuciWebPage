import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: white;
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
       
    }
`