import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
// import {NavLink} from 'react-router-dom'
// import {ReactComponent as LogoSVG} from '../../assets/icons/logo-full.svg'
import {COLORS} from '../styles'

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
`

export const HeaderLink = styled.a`
  font-weight: 400;
  color: ${COLORS.BLACK};
  text-decoration: none;
  margin-left: 40px;
  font-size: 14px;
  text-transform: uppercase;

  @media (max-width: 900px) {
    margin-left: 20px;
  }
`

// export const LogoLink = styled(NavLink)`
//   display: block;
// `

// export const Logo = styled(LogoSVG)`
//   width: 100%;

//   @media (max-width: 900px) {
//     width: 80%;
//   }
// `

const Header = () => {
  console.log(window.location.href)

  return (
    <HeaderContainer>
      {/* <LogoLink to="/">
        <Logo />
      </LogoLink> */}

      <div>
        <Link to="/" activeStyle={{color: 'blue'}}>
          Home
        </Link>
        <Link to="/about" activeStyle={{color: 'blue'}}>
          About
        </Link>
        {/* <HeaderLink to="/about" className={({isActive}) => isActive && activeClassName}>
          About
        </HeaderLink> */}
      </div>
    </HeaderContainer>
  )
}

export default Header
