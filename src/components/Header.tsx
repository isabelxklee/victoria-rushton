import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, Flex, RowFlex } from '../styles';

import { InternalLink } from './Links';

const HeaderWrapper = styled(Flex)`
  color: ${COLORS.BLACK};
  padding: 20px 0;
  border-bottom: 2px solid ${COLORS.BLACK};
  justify-content: space-between;
  align-items: center;
`;

const Right = styled(RowFlex)`
  gap: 30px;
  align-items: center;
`;

const Logo = styled.img`
  width: 250px;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    width: 85%;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <InternalLink url="/">
        <Logo
          alt=""
          src="https://images.ctfassets.net/6l1e28rigfdw/4M73zAbJDT93lMBUrSnGC6/a063c57966eee5adcffb38e9ed564cee/logo-full.svg"
        />
      </InternalLink>
      <Right>
        <InternalLink url="/">Home</InternalLink>
        <InternalLink url="/about">About</InternalLink>
      </Right>
    </HeaderWrapper>
  );
};

export default Header;
