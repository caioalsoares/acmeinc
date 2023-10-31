import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        font-family: 'Open Sans', sans-serif;    }
    a {
        text-decoration: none;
        font-size: inherit;
        color: inherit;
    }
`;

export default GlobalStyle;
