import {createGlobalStyle} from 'styled-components'
// cecilie sans
// 800
import cecilie8001 from './fonts/cecilie-sans/800-cecilie-black.woff'
import cecilie8002 from './fonts/cecilie-sans/800-cecilie-black.woff2'
import cecilieItalic8001 from './fonts/cecilie-sans/800-cecilie-black-italic.woff'
import cecilieItalic8002 from './fonts/cecilie-sans/800-cecilie-black-italic.woff2'
// 700
import cecilie7001 from './fonts/cecilie-sans/700-cecilie-bold.woff'
import cecilie7002 from './fonts/cecilie-sans/700-cecilie-bold.woff2'
import cecilieItalic7001 from './fonts/cecilie-sans/700-cecilie-bold-italic.woff'
import cecilieItalic7002 from './fonts/cecilie-sans/700-cecilie-bold-italic.woff2'
// 400
import cecilie4001 from './fonts/cecilie-sans/400-cecilie-regular.woff'
import cecilie4002 from './fonts/cecilie-sans/400-cecilie-regular.woff2'
import cecilieItalic4001 from './fonts/cecilie-sans/400-cecilie-italic.woff'
import cecilieItalic4002 from './fonts/cecilie-sans/400-cecilie-italic.woff2'
// 300
import cecilie3001 from './fonts/cecilie-sans/300-cecilie-book.woff'
import cecilie3002 from './fonts/cecilie-sans/300-cecilie-book.woff2'
import cecilieItalic3001 from './fonts/cecilie-sans/300-cecilie-book-italic.woff'
import cecilieItalic3002 from './fonts/cecilie-sans/300-cecilie-book-italic.woff2'
// 200
import cecilie2001 from './fonts/cecilie-sans/200-cecilie-light.woff'
import cecilie2002 from './fonts/cecilie-sans/200-cecilie-light.woff2'
import cecilieItalic2001 from './fonts/cecilie-sans/200-cecilie-light-italic.woff'
import cecilieItalic2002 from './fonts/cecilie-sans/200-cecilie-light-italic.woff2'

// embury text
// 700
import emburyText7001 from './fonts/embury-text/700-embury-text-bold.woff'
import emburyText7002 from './fonts/embury-text/700-embury-text-bold.woff2'
import emburyTextItalic7001 from './fonts/embury-text/700-embury-text-bold-italic.woff'
import emburyTextItalic7002 from './fonts/embury-text/700-embury-text-bold-italic.woff2'
// 400
import emburyText4001 from './fonts/embury-text/400-embury-text-regular.woff'
import emburyText4002 from './fonts/embury-text/400-embury-text-regular.woff2'
import emburyTextItalic4001 from './fonts/embury-text/400-embury-text-italic.woff'
import emburyTextItalic4002 from './fonts/embury-text/400-embury-text-italic.woff2'
// 300
import emburyText3001 from './fonts/embury-text/300-embury-text-book.woff'
import emburyText3002 from './fonts/embury-text/300-embury-text-book.woff2'
import emburyTextItalic3001 from './fonts/embury-text/300-embury-text-book-italic.woff'
import emburyTextItalic3002 from './fonts/embury-text/300-embury-text-book-italic.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 800;
    src: url(${cecilie8001}) format('woff'),
        url(${cecilie8002}) format('woff2');
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 800;
    src: url(${cecilieItalic8001}) format('woff'),
        url(${cecilieItalic8002}) format('woff2');
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${cecilie7001}) format('woff'),
        url(${cecilie7002}) format('woff2');
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 700;
    src: url(${cecilieItalic7001}) format('woff'),
        url(${cecilieItalic7002}) format('woff2');
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
    src: url(${cecilie3001}) format('woff'),
        url(${cecilie3002}) format('woff2');
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 300;
    src: url(${cecilieItalic3001}) format('woff'),
        url(${cecilieItalic3002}) format('woff2');
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 200;
    src: url(${cecilie2001}) format('woff'),
        url(${cecilie2002}) format('woff2');
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 200;
    src: url(${cecilieItalic2001}) format('woff'),
        url(${cecilieItalic2002}) format('woff2');
  }

  /* embury text */

  @font-face {
      font-family: 'Embury Text';
      font-style: normal;
      font-weight: 700;
      src: url(${emburyText7001}) format('woff'),
        url(${emburyText7002}) format('woff2');
  }

  @font-face {
      font-family: 'Embury Text';
      font-style: italic;
      font-weight: 700;
      src: url(${emburyTextItalic7001}) format('woff'),
        url(${emburyTextItalic7002}) format('woff2');
  }

  @font-face {
      font-family: 'Embury Text';
      font-style: normal;
      font-weight: 400;
      src: url(${emburyText4001}) format('woff'),
        url(${emburyText4002}) format('woff2');
  }

  @font-face {
      font-family: 'Embury Text';
      font-style: italic;
      font-weight: 400;
      src: url(${emburyTextItalic4001}) format('woff'),
        url(${emburyTextItalic4002}) format('woff2');
  }

  @font-face {
      font-family: 'Embury Text';
      font-style: normal;
      font-weight: 300;
      src: url(${emburyText3001}) format('woff'),
        url(${emburyText3002}) format('woff2');
  }

  @font-face {
      font-family: 'Embury Text';
      font-style: italic;
      font-weight: 300;
      src: url(${emburyTextItalic3001}) format('woff'),
        url(${emburyTextItalic3002}) format('woff2');
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
