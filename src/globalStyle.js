import {createGlobalStyle} from 'styled-components'
import cecilie4001 from './fonts/cecilie-sans/400-cecilie-regular.woff'
import cecilie4002 from './fonts/cecilie-sans/400-cecilie-regular.woff2'
import cecilieItalic4001 from './fonts/cecilie-sans/400-cecilie-regular.woff'
import cecilieItalic4002 from './fonts/cecilie-sans/400-cecilie-regular.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Cecilie Sans';
  font-style: normal;
  font-weight: 800;
  src: url('./fonts/cecilie-sans/800-cecilie-black.woff') format('woff'),
    url('./fonts/cecilie-sans/800-cecilie-black.woff2') format('woff2');
}

@font-face {
  font-family: 'Cecilie Sans';
  font-style: italic;
  font-weight: 800;
  src: url('./fonts/cecilie-sans/800-cecilie-black-italic.woff') format('woff'),
    url('./fonts/cecilie-sans/800-cecilie-black-italic.woff2') format('woff2');
}

@font-face {
  font-family: 'Cecilie Sans';
  font-style: normal;
  font-weight: 700;
  src: url('./fonts/cecilie-sans/700-cecilie-bold.woff') format('woff'),
    url('./fonts/cecilie-sans/700-cecilie-bold.woff2') format('woff2');
}

@font-face {
  font-family: 'Cecilie Sans';
  font-style: italic;
  font-weight: 700;
  src: url('./fonts/cecilie-sans/700-cecilie-bold-italic.woff') format('woff'),
    url('./fonts/cecilie-sans/700-cecilie-bold-italic.woff2') format('woff2');
}

@font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${cecilie4001}) format('woff'),
      url(${cecilie4002}) format('woff2');
}

@font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 400;
    src: url(${cecilieItalic4001}) format('woff'),
      url(${cecilieItalic4002}) format('woff2');
}

@font-face {
  font-family: 'Cecilie Sans';
  font-style: normal;
  font-weight: 300;
  src: url('./fonts/cecilie-sans/400-cecilie-book.woff') format('woff'),
    url('./fonts/cecilie-sans/400-cecilie-book.woff2') format('woff2');
}

@font-face {
  font-family: 'Cecilie Sans';
  font-style: italic;
  font-weight: 300;
  src: url('./fonts/cecilie-sans/400-cecilie-book-italic.woff') format('woff'),
    url('./fonts/cecilie-sans/400-cecilie-book-italic.woff2') format('woff2');
}

@font-face {
  font-family: 'Cecilie Sans';
  font-style: normal;
  font-weight: 200;
  src: url('./fonts/cecilie-sans/400-cecilie-light.woff') format('woff'),
    url('./fonts/cecilie-sans/400-cecilie-light.woff2') format('woff2');
}

@font-face {
  font-family: 'Cecilie Sans';
  font-style: italic;
  font-weight: 200;
  src: url('./fonts/cecilie-sans/400-cecilie-light-italic.woff') format('woff'),
    url('./fonts/cecilie-sans/400-cecilie-light-italic.woff2') format('woff2');
}

/* embury text */

@font-face {
  font-family: 'Embury Text';
  font-style: normal;
  font-weight: 700;
  src: url('./fonts/embury-text/700-embury-text-bold.woff') format('woff'),
    url('./fonts/embury-text/700-embury-text-bold.woff2') format('woff2');
}

@font-face {
  font-family: 'Embury Text';
  font-style: italic;
  font-weight: 700;
  src: url('./fonts/embury-text/700-embury-text-bold-italic.woff') format('woff'),
    url('./fonts/embury-text/700-embury-text-bold-italic.woff2') format('woff2');
}

@font-face {
  font-family: 'Embury Text';
  font-style: normal;
  font-weight: 400;
  src: url('./fonts/embury-text/700-embury-text-regular.woff') format('woff'),
    url('./fonts/embury-text/700-embury-text-regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Embury Text';
  font-style: italic;
  font-weight: 400;
  src: url('./fonts/embury-text/700-embury-text-italic.woff') format('woff'),
    url('./fonts/embury-text/700-embury-text-italic.woff2') format('woff2');
}

@font-face {
  font-family: 'Embury Text';
  font-style: normal;
  font-weight: 300;
  src: url('./fonts/embury-text/700-embury-text-book.woff') format('woff'),
    url('./fonts/embury-text/700-embury-text-book.woff2') format('woff2');
}

@font-face {
  font-family: 'Embury Text';
  font-style: italic;
  font-weight: 300;
  src: url('./fonts/embury-text/700-embury-text-light-italic.woff') format('woff'),
    url('./fonts/embury-text/700-embury-text-light-italic.woff2') format('woff2');
}


  body {
    background: #F4F4F4;
    color: #1E1E1E;
    font-family: 'Cecilie Sans', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }
`
/* cecilie sans */
