import styled, {createGlobalStyle} from 'styled-components'
import {Link} from 'react-router-dom'
import cecilieBold from './fonts/Cecilie-Bold.otf'
import cecilieBook from './fonts/Cecilie-Book.otf'
import emburyBold from './fonts/embury-text/Embury_Text-Bold.woff'
import emburyBoldItalic from './fonts/embury-text/Embury_Text-Bold_Italic.woff'
import emburyRegular from './fonts/embury-text/Embury_Text-Regular.woff'
import emburyItalic from './fonts/embury-text/Embury_Text-Italic.woff'
import emburyBook from './fonts/embury-text/Embury_Text-Book.woff'
import emburyBookItalic from './fonts/embury-text/Embury_Text-Book_Italic.woff'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 700;
    src: url(${cecilieBold});
  }

  @font-face {
    font-family: 'Cecilie Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${cecilieBook});
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: normal;
    font-weight: 300;
    src: url(${emburyBook}) format("woff2"),
    url("./fonts/embury-text/Embury_Text-Book.woff") format("woff");
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: italic;
    font-weight: 300;
    src: url(${emburyBookItalic});
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: normal;
    font-weight: 400;
    src: url(${emburyRegular});
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: italic;
    font-weight: 400;
    src: url(${emburyItalic});
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: normal;
    font-weight: 700;
    src: url(${emburyBold});
  }

  @font-face {
    font-family: 'Embury Text';
    font-style: italic;
    font-weight: 700;
    src: url(${emburyBoldItalic});
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

export const TextLink = styled.a`
  font-weight: 700;
  color: #f4f4f4;
  text-decoration: none;
`

export const InternalLink = styled(Link)`
  font-weight: 700;
  color: #1e1e1e;
  text-decoration: none;
  margin-right: 20px;
`

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #1e1e1e;
`

export const P = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
`

export const Wrapper = styled.div`
  margin: 80px;
  padding: 0;
`
