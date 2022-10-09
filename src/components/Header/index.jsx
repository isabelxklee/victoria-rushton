import React from 'react'
import {HeaderContainer, LogoLink, HeaderLink, Logo} from './styles'

const Header = () => (
  <HeaderContainer>
    <LogoLink to="/">
      <Logo />
    </LogoLink>

    <div>
      <HeaderLink to="/" activeClassName="active">
        Type
      </HeaderLink>
      <HeaderLink to="/about" activeClassName="active">
        About
      </HeaderLink>
    </div>
  </HeaderContainer>
)

export default Header
