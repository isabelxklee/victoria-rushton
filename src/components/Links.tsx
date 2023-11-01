import React from 'react';
import { ReactNode } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { COLORS, FONT_WEIGHTS } from '../styles';

const A = styled.a<{
  $fontWeight?: number;
  $light?: boolean;
  $textCase?: string;
}>`
  font-weight: ${({ $fontWeight }) => $fontWeight || FONT_WEIGHTS.BOLD};
  color: ${({ $light }) => ($light ? COLORS.WHITE : COLORS.BLACK)};
  text-decoration: none;
  text-transform: ${({ $textCase }) => $textCase};
`;

const StyledLink = styled(Link)<{ $textCase?: string }>`
  color: ${COLORS.BLACK};
  font-weight: ${FONT_WEIGHTS.REGULAR};
  text-decoration: none;
  text-transform: ${({ $textCase }) => $textCase};
`;

interface LinkProps {
  children: string | ReactNode;
  hideActive?: boolean;
  textCase?: string;
  url: string;
}

interface ExternalLinkProps extends LinkProps {
  fontWeight?: number;
  light?: boolean;
}

export const InternalLink = ({
  children,
  hideActive,
  textCase,
  url
}: LinkProps) => {
  return (
    <StyledLink
      $textCase={textCase}
      activeStyle={{
        fontWeight: hideActive ? FONT_WEIGHTS.REGULAR : FONT_WEIGHTS.BOLD
      }}
      to={url}>
      {children}
    </StyledLink>
  );
};

export const ExternalLink = ({
  fontWeight,
  light,
  children,
  textCase,
  url
}: ExternalLinkProps) => {
  return (
    <A
      $fontWeight={fontWeight}
      $light={light}
      $textCase={textCase}
      href={url}
      rel="noreferrer noopener"
      target="_blank">
      {children}
    </A>
  );
};
