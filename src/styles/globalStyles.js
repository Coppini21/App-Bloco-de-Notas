import  { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    background: black ;
    color: black;
    -webkit-font-smoothing: antialiased;
    min-width: 500px;
    position: relative;
  }

  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  
  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }
`;

