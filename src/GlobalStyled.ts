import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Lato', sans-serif;
    background: #333;
  }
  #root {
    background:#fff;
    max-width: 375px;
    max-height: 812px;
    margin: auto;
    transform: translateY(0);
  }
`;

export default GlobalStyled;
