import {createGlobalStyle} from 'styled-components'
import {Colors} from './global-styles'

// cecilie sans
// 800
import cecilie800 from '../fonts/cecilie-sans/Cecilie-Black.woff'
import cecilieItalic800 from '../fonts/cecilie-sans/Cecilie-Black-Italic.woff'
// 700
import cecilie700 from '../fonts/cecilie-sans/Cecilie-Bold.woff'
import cecilieItalic700 from '../fonts/cecilie-sans/Cecilie-Bold-Italic.woff'
// 400
import cecilie400 from '../fonts/cecilie-sans/Cecilie-Regular.woff'
import cecilieItalic400 from '../fonts/cecilie-sans/Cecilie-Regular-Italic.woff'
// 300
import cecilie300 from '../fonts/cecilie-sans/Cecilie-Book.woff'
import cecilieItalic300 from '../fonts/cecilie-sans/Cecilie-Book-Italic.woff'
// 200
import cecilie200 from '../fonts/cecilie-sans/Cecilie-Light.woff'
import cecilieItalic200 from '../fonts/cecilie-sans/Cecilie-Light-Italic.woff'

// embury text
// 700
import emburyText7001 from '../fonts/embury-text/700-embury-text-bold.woff'
import emburyText7002 from '../fonts/embury-text/700-embury-text-bold.woff2'
import emburyTextItalic7001 from '../fonts/embury-text/700-embury-text-bold-italic.woff'
import emburyTextItalic7002 from '../fonts/embury-text/700-embury-text-bold-italic.woff2'
// 400
import emburyText4001 from '../fonts/embury-text/400-embury-text-regular.woff'
import emburyText4002 from '../fonts/embury-text/400-embury-text-regular.woff2'
import emburyTextItalic4001 from '../fonts/embury-text/400-embury-text-italic.woff'
import emburyTextItalic4002 from '../fonts/embury-text/400-embury-text-italic.woff2'
// 300
import emburyText3001 from '../fonts/embury-text/300-embury-text-book.woff'
import emburyText3002 from '../fonts/embury-text/300-embury-text-book.woff2'
import emburyTextItalic3001 from '../fonts/embury-text/300-embury-text-book-italic.woff'
import emburyTextItalic3002 from '../fonts/embury-text/300-embury-text-book-italic.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 800;
    src: url(${cecilie800}) format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 800;
    src: url(${cecilieItalic800}) format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${cecilie700}) format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 700;
    src: url(${cecilieItalic700}) format('woff')
  }

  @font-face {
      font-family: 'Cecilie Sans';
      font-style: normal;
      font-weight: 400;
      src: url(${cecilie400}) format('woff')
  }

  @font-face {
      font-family: 'Cecilie Sans';
      font-style: italic;
      font-weight: 400;
      src: url(${cecilieItalic400}) format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 300;
    src: url(${cecilie300}) format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 300;
    src: url(${cecilieItalic300}) format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 200;
    src: url(${cecilie200}) format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 200;
    src: url(${cecilieItalic200}) format('woff')
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

  /* gautreaux */

  @font-face {
    font-family: 'Gautreaux';
    font-style: normal;
    font-weight: 200;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/gautreaux/200-gautreaux-light.woff') format('woff'),
      url('https://storage.googleapis.com/victoria-rushton-bucket/gautreaux/200-gautreaux-light.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Gautreaux';
    font-style: normal;
    font-weight: 500;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/gautreaux/500-gautreaux-medium.woff') format('woff'),
      url('https://storage.googleapis.com/victoria-rushton-bucket/gautreaux/500-gautreaux-medium.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Gautreaux';
    font-style: normal;
    font-weight: 700;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/gautreaux/700-gautreaux-bold.woff') format('woff'),
      url('https://storage.googleapis.com/victoria-rushton-bucket/gautreaux/700-gautreaux-bold.woff2') format('woff2');
  }

  /* marcia */

  @font-face {
      font-family: 'Marcia';
      font-style: normal;
      font-weight: 700;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/marcia/700-marcia-bold.woff') format('woff')
  }

  @font-face {
      font-family: 'Marcia';
      font-style: italic;
      font-weight: 700;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/marcia/700-marcia-bold-italic.woff') format('woff')
  }

  @font-face {
      font-family: 'Marcia';
      font-style: normal;
      font-weight: 400;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/marcia/400-marcia-regular.woff') format('woff')
  }

  @font-face {
      font-family: 'Marcia';
      font-style: italic;
      font-weight: 400;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/marcia/400-marcia-regular-italic.woff') format('woff')
  }

  body {
    background: ${Colors.white};
    color: ${Colors.black};
    font-family: 'Cecilie Sans', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }
`
/* cecilie sans */
