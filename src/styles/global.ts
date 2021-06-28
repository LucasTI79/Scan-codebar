import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
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
    background-color: #f1f2f2;
    width: 90vw;
  }

  @media(max-width: 769px){
    main {
      width: 100vw;
    } 
  }
`