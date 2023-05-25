import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { COLORS, FONT_WEIGHTS } from '../styles';

const A = styled.a<{ $inputWeight: number; $light: boolean }>`
  font-weight: ${({ $inputWeight }) => $inputWeight || FONT_WEIGHTS.BOLD};
  color: ${({ $light }) => ($light ? COLORS.WHITE : COLORS.BLACK)};
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  color: ${COLORS.BLACK};
  text-decoration: none;
`;

interface LinkProps {
  children: string;
  url: string;
}

export const InternalLink = ({ children, url }: LinkProps) => {
  return (
    <StyledLink target="_blank" to={url}>
      {children}
    </StyledLink>
  );
};

export const ExternalLink = ({ children, url }: LinkProps) => {
  return (
    <A
      $inputWeight={FONT_WEIGHTS.BOOK}
      $light={true}
      href={url}
      rel="noreferrer noopener"
    >
      {children}
    </A>
  );
};
