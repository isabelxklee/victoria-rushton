import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {ReactComponent as LogoSVG} from '../../icons/logo-full.svg'
import {Colors} from '../../styles'

export const HeaderContainer = styled.div`
  color: ${Colors.black};
  padding-bottom: 40px;
  width: calc(100vw - 160px);
  border-bottom: 2px solid ${Colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
    padding: 40px 0;
  }
`

export const HeaderLink = styled(NavLink)`
  font-weight: 400;
  color: ${Colors.black};
  text-decoration: none;
  margin-left: 40px;
  font-size: 14px;
  text-transform: uppercase;
`

export const LogoLink = styled(NavLink)`
  display: block;
`

export const Logo = styled(LogoSVG)`
  width: 100%;
`
