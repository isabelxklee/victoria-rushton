import React from 'react';
import { ReactNode } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { COLORS, FONT_WEIGHTS } from '../styles';

const A = styled.a<{ $inputWeight?: number; $light?: boolean }>`
  font-weight: ${({ $inputWeight }) => $inputWeight || FONT_WEIGHTS.BOLD};
  color: ${({ $light }) => ($light ? COLORS.WHITE : COLORS.BLACK)};
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  color: ${COLORS.BLACK};
  text-decoration: none;
`;

interface LinkProps {
  children: string | ReactNode;
  url: string;
}

interface ExternalLinkProps extends LinkProps {
  inputWeight?: number;
  light?: boolean;
}

export const InternalLink = ({ children, url }: LinkProps) => {
  return (
    <StyledLink activeStyle={{ fontWeight: FONT_WEIGHTS.BOLD }} to={url}>
      {children}
    </StyledLink>
  );
};

export const ExternalLink = ({
  inputWeight,
  light,
  children,
  url
}: ExternalLinkProps) => {
  return (
    <A
      $inputWeight={inputWeight}
      $light={light}
      href={url}
      rel="noreferrer noopener"
      target="_blank"
    >
      {children}
    </A>
  );
};
