/* eslint-disable @typescript-eslint/no-explicit-any */
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
  margin-top: 60px;
  border: 2px solid ${COLORS.BLACK};

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    margin-top: 0;
  }
`;

const Header = styled.div`
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  padding: 30px 40px;
  border-radius: 14px 14px 0 0;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding: 20px;
  }
`;

const Body = styled.div`
  padding: 30px 40px;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    padding: 20px;
  }
`;

const Card = ({ children, title }: CardProps) => {
  return (
    <Wrapper>
      <Header>
        <H3>{title}</H3>
      </Header>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default Card;
