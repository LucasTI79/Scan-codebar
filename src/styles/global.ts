import { createGlobalStyle } from 'styled-components';

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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    background-color: #f1f2f2;
    width: 90vw;
  }

  form {
    background: white;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 50px;

    input,select {
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
    }

    label {
      color: #3d3d3d;
      display: block;
      font-family: sans-serif;
      font-size: 14px;
      font-weight: 500;
      margin: 8px 0;
    }
  }

  .submitButton {
      background-color: #6976d9;
      color: white;
      font-family: sans-serif;
      font-size: 14px;
      margin: 20px 0px;
      border-radius: 4px;
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
    }

  /* @media(max-width: 769px){
    main {
      width: 100vw;
    } 
  } */
`