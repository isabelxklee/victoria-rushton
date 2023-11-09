import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, H3 } from '../styles';

interface CardProps {
  children: any;
  title: string;
}

const Wrapper = styled.div`
  background: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  border-radius: 20px;
  padding: 40px;
  margin-top: 60px;
  border: 3px solid ${COLORS.BLACK};

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin-top: 0;
  }
`;

const Card = ({ children, title }: CardProps) => {
  return (
    <Wrapper>
      <H3>{title}</H3>
      {children}
    </Wrapper>
  );
};

export default Card;
