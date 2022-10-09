import React from 'react'
import {HeaderContainer, LogoLink, HeaderLink, Logo} from './styles'

const Header = () => {
  let activeClassName = 'active'

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo />
      </LogoLink>

      <div>
        <HeaderLink to="/" className={({isActive}) => isActive && activeClassName}>
          Type
        </HeaderLink>
        <HeaderLink to="/about" className={({isActive}) => isActive && activeClassName}>
          About
        </HeaderLink>
      </div>
    </HeaderContainer>
  )
}

export default Header
