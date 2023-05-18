import React from 'react'

const Header = () => {
  let activeClassName = 'active'

  return (
    <HeaderContainer>
      <LogoLink to="/">
        <Logo />
      </LogoLink>

      <div>
        {/* <HeaderLink to="/" className={({isActive}) => isActive && activeClassName}>
        Type
      </HeaderLink> */}
        <HeaderLink to="/about" className={({isActive}) => isActive && activeClassName}>
          About
        </HeaderLink>
      </div>
    </HeaderContainer>
  )
}

export default Header
