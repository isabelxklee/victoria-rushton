import React from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS, RowFlex } from '../styles';

import { InternalLink } from './Links';
import { FlexContainer } from './styles';

const HeaderWrapper = styled(FlexContainer)`
  color: ${COLORS.BLACK};
  padding-bottom: 40px;
  width: calc(100vw - 160px);
  border-bottom: 2px solid ${COLORS.BLACK};
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    width: 100%;
    padding: 40px 0;
  }
`;

const Right = styled(RowFlex)`
  gap: 30px;
`;

const Logo = styled.img`
  width: 300px;

  @media (max-width: ${BREAKPOINTS.MEDIUM}) {
    width: 80%;
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
        <InternalLink textCase="uppercase" url="/">
          Home
        </InternalLink>
        <InternalLink textCase="uppercase" url="/about">
          About
        </InternalLink>
        <InternalLink textCase="uppercase" url="/download-trial-fonts">
          Download trial fonts
        </InternalLink>
      </Right>
    </HeaderWrapper>
  );
};

export default Header;
