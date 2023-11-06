import { createGlobalStyle } from 'styled-components';

export const COLORS = {
  WHITE: '#F4F4F4',
  BLACK: '#1E1E1E'
};

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Embury Text';
    font-style: normal;
    font-weight: 300;
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/embury-text/Embury-Text-Book.woff') format('woff')
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: italic;
    font-weight: 300;
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/embury-text/Embury-Text-Book-Italic.woff') format('woff')
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Embury Text', sans-serif;
    font-size: 16px;
    font-weight: 300;
    background: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
    line-height: 1.6;
  }

  a {
    color: ${COLORS.BLACK};
  }
`;
