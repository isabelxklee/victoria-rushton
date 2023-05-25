import React from 'react';
import { ReactNode } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { COLORS, FONT_WEIGHTS } from '../styles';

const A = styled.a<{
  $inputWeight?: number;
  $light?: boolean;
  $textCase?: string;
}>`
  font-weight: ${({ $inputWeight }) => $inputWeight || FONT_WEIGHTS.BOLD};
  color: ${({ $light }) => ($light ? COLORS.WHITE : COLORS.BLACK)};
  text-decoration: none;
  text-transform: ${({ $textCase }) => $textCase};
`;

const StyledLink = styled(Link)<{ $textCase?: string }>`
  color: ${COLORS.BLACK};
  text-decoration: none;
  text-transform: ${({ $textCase }) => $textCase};
`;

interface LinkProps {
  children: string | ReactNode;
  textCase?: string;
  url: string;
}

interface ExternalLinkProps extends LinkProps {
  inputWeight?: number;
  light?: boolean;
}

export const InternalLink = ({ children, textCase, url }: LinkProps) => {
  return (
    <StyledLink
      $textCase={textCase}
      activeStyle={{ fontWeight: FONT_WEIGHTS.BOLD }}
      to={url}>
      {children}
    </StyledLink>
  );
};

export const ExternalLink = ({
  inputWeight,
  light,
  children,
  textCase,
  url
}: ExternalLinkProps) => {
  return (
    <A
      $inputWeight={inputWeight}
      $light={light}
      $textCase={textCase}
      href={url}
      rel="noreferrer noopener"
      target="_blank">
      {children}
    </A>
  );
};
