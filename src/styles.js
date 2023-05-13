import styled, {createGlobalStyle} from 'styled-components'

export const COLORS = {
  WHITE: '#F4F4F4',
  BLACK: '#1E1E1E',
}

export const FONT_WEIGHTS = {
  LIGHT: 200,
  BOOK: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
  BLACK: 800,
}

export const Wrapper = styled.div`
  padding: 80px;
`

export const H1 = styled.h1`
  font-size: 100px;
  font-weight: ${FONT_WEIGHTS.REGULAR};
  line-height: 0.9;
  margin: ${({$margin}) => $margin};
  font-family: ${({$font}) => $font};

  @media (max-width: 900px) {
    font-size: 60px;
  }
`

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: ${FONT_WEIGHTS.BOLD};
  line-height: 1.1;
`

export const H3 = styled.h3`
  font-size: 18px;
  margin: 0 0 16px 0;
`

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: ${FONT_WEIGHTS.BOOK};
  line-height: 1.4;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOOK};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Book.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Regular.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOLD};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Bold.woff') format('woff')
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Cecilie Sans', sans-serif;
    font-weight: ${FONT_WEIGHTS.BOOK};
    background: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
  }
`
