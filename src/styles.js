import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
    }

    *:focus {
        box-shadow: 0 0 0 2px #000;
        outline: none;
    }

    body {
        font-family: 'Open Sans', sans-serif;
    }

    #root {
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;
