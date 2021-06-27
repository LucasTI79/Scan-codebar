import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body, ul, nav {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    width: 100vw;
  }
  main {
    width: 85vw;
    background-color: #f1f2f2;
  }
`