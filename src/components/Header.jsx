import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../styles';

import { InternalLink } from './Links';

export const HeaderContainer = styled.div`
  color: ${COLORS.BLACK};
  padding-bottom: 40px;
  width: calc(100vw - 160px);
  border-bottom: 2px solid ${COLORS.BLACK};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    padding: 40px 0;
  }
`;

// export const StyledLink = styled(Link)`
//   font-weight: ${FONT_WEIGHTS.REGULAR};
//   color: ${COLORS.BLACK};
//   text-decoration: none;
//   margin-left: 40px;
//   font-size: 14px;
//   text-transform: uppercase;

//   @media (max-width: 900px) {
//     margin-left: 20px;
//   }
// `;

export const Logo = styled.img`
  width: 300px;

  /* @media (max-width: 900px) {
    width: 80%;
  } */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <InternalLink url="/">
        <Logo
          alt=""
          src="https://images.ctfassets.net/6l1e28rigfdw/4M73zAbJDT93lMBUrSnGC6/a063c57966eee5adcffb38e9ed564cee/logo-full.svg"
        />
      </InternalLink>
      <div>
        <InternalLink url="/">
          Home
        </InternalLink>
        <InternalLink url="/about">
          About
        </InternalLink>
      </div>
    </HeaderContainer>
  );
};

export default Header;
