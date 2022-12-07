import {createGlobalStyle} from 'styled-components'
import {Colors} from './global-styles'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 800;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Black.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 800;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Black-Italic.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 700;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Bold.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 700;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Bold-Italic.woff') format('woff')
  }

  @font-face {
      font-family: 'Cecilie Sans';
      font-style: normal;
      font-weight: 400;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Regular.woff') format('woff')
  }

  @font-face {
      font-family: 'Cecilie Sans';
      font-style: italic;
      font-weight: 400;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Regular-Italic.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 300;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Book.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 300;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Book-Italic.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 200;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Light.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: 200;
    src: url('https://storage.googleapis.com/victoria-rushton-bucket/cecilie-sans/Cecilie-Light-Italic.woff') format('woff')
  }

  /* embury text */

  @font-face {
      font-family: 'Embury Text';
      font-style: normal;
      font-weight: 700;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/700-embury-text-bold.woff') format('woff'),
        url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/700-embury-text-bold.woff2') format('woff2');
  }

  @font-face {
      font-family: 'Embury Text';
      font-style: italic;
      font-weight: 700;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/700-embury-text-bold-italic.woff') format('woff'),
        url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/700-embury-text-bold-italic.woff2') format('woff2');
  }

  @font-face {
      font-family: 'Embury Text';
      font-style: normal;
      font-weight: 400;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/400-embury-text-regular.woff') format('woff'),
        url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/400-embury-text-regular.woff2') format('woff2');
  }

  @font-face {
      font-family: 'Embury Text';
      font-style: italic;
      font-weight: 400;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/400-embury-text-italic.woff') format('woff'),
        url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/400-embury-text-italic.woff2') format('woff2');
  }

  @font-face {
      font-family: 'Embury Text';
      font-style: normal;
      font-weight: 300;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/300-embury-text-book.woff') format('woff'),
        url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/300-embury-text-book.woff2') format('woff2');
  }

  @font-face {
      font-family: 'Embury Text';
      font-style: italic;
      font-weight: 300;
      src: url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/300-embury-text-book-italic.woff') format('woff'),
        url('https://storage.googleapis.com/victoria-rushton-bucket/embury-text/300-embury-text-book-italic.woff2') format('woff2');
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
