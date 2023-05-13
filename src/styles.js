import styled, { createGlobalStyle } from "styled-components";

export const Wrapper = styled.div`
  padding: 80px;
`;

export const GlobalStyles = createGlobalStyle`
@font-face {
      font-family: 'Cecilie Sans';
      font-style: normal;
      font-weight: 400;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Regular.woff') format('woff')
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Cecilie Sans', sans-serif;
  }
`;
