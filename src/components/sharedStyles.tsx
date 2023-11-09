import styled from 'styled-components';

import { Button, COLORS, RowFlex } from '../styles';

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

  @media (max-width: 1000px) {
    font-size: ${({ $size }) => `${$size * 0.6}px`};
  }
`;

export const SectionWrapper = styled.div`
  border-bottom: 2px solid ${COLORS.BLACK};
  padding: 20px 0;

  &:last-child {
    border-bottom: none;
    margin-bottom: 180px;
  }
`;

export const Select = styled.select<{ $width?: string }>`
  height: fit-content;
  width: ${({ $width }) => ($width === 'fixed' ? '240px' : '100%')};
  padding: 10px;
  font-family: 'Cecilie Sans', 'sans-serif';
  font-size: 16px;
  font-weight: 300;
  border-radius: 4px;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px), calc(100% - 15px), calc(100% - 2.5em);
  background-position-y: calc(50%);
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const StyledButton = styled(Button)<{ $status?: boolean }>`
  height: 100%;
  color: ${({ $status }) => ($status ? COLORS.BLACK : COLORS.WHITE)};
  background: ${({ $status }) => ($status ? COLORS.WHITE : COLORS.BLACK)};
`;

export const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`;
