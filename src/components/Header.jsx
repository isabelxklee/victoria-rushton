import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
// import {NavLink} from 'react-router-dom'
// import {ReactComponent as LogoSVG} from '../../assets/icons/logo-full.svg'
import {COLORS, FONT_WEIGHTS} from '../styles'

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

export const StyledLink = styled(Link)`
  font-weight: ${FONT_WEIGHTS.REGULAR};
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
        <StyledLink to="/" activeStyle={{fontWeight: FONT_WEIGHTS.BOLD}}>
          Home
        </StyledLink>
        <StyledLink to="/about" activeStyle={{fontWeight: FONT_WEIGHTS.BOLD}}>
          About
        </StyledLink>
      </div>
    </HeaderContainer>
  )
}

export default Header
