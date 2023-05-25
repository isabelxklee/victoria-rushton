import React from "react";
import styled from "styled-components";

import { COLORS,FONT_WEIGHTS } from "../styles";
// import { Link } from 'gatsby';

export const StyledA = styled.a<{$inputWeight: number, $light: boolean}>`
  font-weight: ${({$inputWeight }) => ($inputWeight || FONT_WEIGHTS.BOLD)};
  color: ${({ $light }) => ($light ? COLORS.WHITE : COLORS.BLACK)};
  text-decoration: none;
`;

export const TextLink = ({children, url}) => {
  return (
    <StyledA
    $inputWeight={FONT_WEIGHTS.BOOK}
    $light={true}
    href={url}
    target="_blank"
  >
    {children}
  </StyledA>
  )
}

