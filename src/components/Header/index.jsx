import React from 'react'
import {HeaderContainer, HeaderLink, Logo} from './styles'

const Header = () => (
  <HeaderContainer>
    <Logo />
    <HeaderLink exact to="/" activeClassName="active">
      Type
    </HeaderLink>
    <HeaderLink to="/about" activeClassName="active">
      About
    </HeaderLink>
  </HeaderContainer>
)

export default Header
