import styled, { createGlobalStyle } from "styled-components";
import cecilieBold from "./fonts/Cecilie-Bold.otf";
import cecilieBook from "./fonts/Cecilie-Book.otf";

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

  body {
    background: #F4F4F4;
    color: #1E1E1E;
    font-family: 'Cecilie Sans', sans-serif;
    font-weight: 400;
  }
`;
