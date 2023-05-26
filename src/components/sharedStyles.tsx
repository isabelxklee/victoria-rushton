import styled from 'styled-components';

import { COLORS } from '../styles';

export const HeroCopy = styled.h2<{
  $fontFamily: string;
  $lineHeight: number;
  $size: number;
  $slant: string;
  $weight: number;
}>`
  font-family: ${({ $fontFamily }) => $fontFamily};
  font-size: ${({ $size }) => `${$size}px`};
  font-weight: ${({ $weight }) => $weight};
  line-height: ${({ $lineHeight }) => $lineHeight};
  font-style: ${({ $slant }) => $slant};
`;

export const SectionWrapper = styled.div`
  border-bottom: 2px solid ${COLORS.BLACK};
  padding: 20px 0;

  &:last-child {
    border-bottom: none;
    margin-bottom: 180px;
  }
`;
