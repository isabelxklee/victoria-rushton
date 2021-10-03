import React from 'react'
import {HeaderContainer, HeaderLink} from './styles'

const Header = () => (
  <HeaderContainer>
    <HeaderLink exact to="/" activeClassName="active">
      Victoria Rushton
    </HeaderLink>
    {/* <HeaderLink to="/type" activeClassName="active">
      Type
    </HeaderLink> */}
    <HeaderLink to="/about" activeClassName="active">
      About
    </HeaderLink>
  </HeaderContainer>
)

export default Header
