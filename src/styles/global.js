import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, border-style, #root {
    min-height: 100%;
  }

  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
