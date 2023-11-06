import styled, { createGlobalStyle } from 'styled-components';

export const COLORS = {
  WHITE: '#F4F4F4',
  BLACK: '#1E1E1E'
};

export const FONT_WEIGHTS = {
  LIGHT: 200,
  BOOK: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
  BLACK: 800
};

export const BREAKPOINTS = {
  MEDIUM: '900px'
};

export const Flex = styled.div`
  display: flex;
`;

export const RowFlex = styled(Flex)`
  flex-direction: row;
`;

export const ColumnFlex = styled(Flex)`
  flex-direction: column;
`;

export const Wrapper = styled.div`
  padding: 80px;
`;

export const H1 = styled.h1`
  font-size: 100px;
  font-weight: ${FONT_WEIGHTS.REGULAR};
  line-height: 0.9;
  margin: ${({ $margin }) => $margin};
  font-family: ${({ $font }) => $font};

  @media (max-width: 900px) {
    font-size: 60px;
  }
`;

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: ${FONT_WEIGHTS.BOLD};
  line-height: 1.1;
`;

export const H3 = styled.h3`
  font-size: 18px;
  font-weight: ${FONT_WEIGHTS.BOLD};
  margin: 0;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: ${FONT_WEIGHTS.BOOK};
  line-height: 1.6;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

export const SmallText = styled(Text)`
  font-size: 14px;
  line-height: unset;
`;

export const TextLink = styled.a`
  font-weight: ${props => props.inputWeight || FONT_WEIGHTS.SEMIBOLD};
  color: ${({ $light }) => ($light ? COLORS.WHITE : COLORS.BLACK)};
  text-decoration: none;
  font-size: 18px;
`;

export const Button = styled.button`
  border-radius: 40px;
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  border: 2px solid ${COLORS.BLACK};
  font-family: 'Cecilie Sans', 'sans-serif';
  font-weight: ${FONT_WEIGHTS.BOOK};
  font-size: 16px;
  padding: 4px 16px;
  pointer-events: auto;
  cursor: pointer;
`;

export const SecondaryButton = styled(Button)`
  background: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
`;

export const GlobalStyles = createGlobalStyle`
  /* cecilie sans */

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.LIGHT};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Light.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: ${FONT_WEIGHTS.LIGHT};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Light-Italic.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOOK};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Book.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: ${FONT_WEIGHTS.BOOK};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Book-Italic.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Regular.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Regular-Italic.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOLD};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Bold.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: ${FONT_WEIGHTS.BOLD};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Bold-Italic.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BLACK};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Black.woff') format('woff')
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: italic;
    font-weight: ${FONT_WEIGHTS.BLACK};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/cecilie-sans/Cecilie-Black-Italic.woff') format('woff')
  }

  /* embury text */

  @font-face {
    font-family: 'Embury Text';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOOK};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/embury-text/Embury-Text-Book.woff') format('woff')
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: italic;
    font-weight: ${FONT_WEIGHTS.BOOK};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/embury-text/Embury-Text-Book-Italic.woff') format('woff')
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/embury-text/Embury-Text-Regular.woff') format('woff')
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: italic;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/embury-text/Embury-Text-Regular-Italic.woff') format('woff')
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOLD};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/embury-text/Embury-Text-Bold.woff') format('woff')
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: italic;
    font-weight: ${FONT_WEIGHTS.BOLD};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/embury-text/Embury-Text-Bold-Italic.woff') format('woff')
  }

  /* marcia */

  @font-face {
    font-family: 'Marcia';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/marcia/Marcia-Regular.woff') format('woff')
  }

  @font-face {
    font-family: 'Marcia';
    font-style: italic;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/marcia/Marcia-Regular-Italic.woff') format('woff')
  }

  @font-face {
    font-family: 'Marcia';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOLD};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/marcia/Marcia-Bold.woff') format('woff')
  }

  @font-face {
    font-family: 'Marcia';
    font-style: italic;
    font-weight: ${FONT_WEIGHTS.BOLD};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/marcia/Marcia-Bold.woff') format('woff')
  }

  /* gautreaux */

  @font-face {
    font-family: 'Gautreaux';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.LIGHT};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/gautreaux/Gautreaux-Light.woff') format('woff')
  }

  @font-face {
    font-family: 'Gautreaux';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.MEDIUM};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/gautreaux/Gautreaux-Medium.woff') format('woff')
  }

  @font-face {
    font-family: 'Gautreaux';
    font-style: normal;
    font-weight: ${FONT_WEIGHTS.BOLD};
    src: url('https://victoria-rushton-bucket.storage.googleapis.com/gautreaux/Gautreaux-Bold.woff') format('woff')
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Embury Text', sans-serif;
    font-size: 16px;
    font-weight: ${FONT_WEIGHTS.BOOK};
    background: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
    line-height: 1.4;
  }

  a {
    color: ${COLORS.BLACK};
  }
`;
