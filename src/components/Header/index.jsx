import React from 'react'
import {HeaderContainer, HeaderLink, Logo} from './styles'

const Header = () => (
  <HeaderContainer>
    <Logo />
    <div>
      <HeaderLink exact to="/" activeClassName="active">
        Type
      </HeaderLink>
      <HeaderLink to="/about" activeClassName="active">
        About
      </HeaderLink>
    </div>
  </HeaderContainer>
)

export default Header
