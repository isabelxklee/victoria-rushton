import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {ReactComponent as LogoSVG} from '../../icons/logo-full.svg'

export const HeaderContainer = styled.div`
  color: #1e1e1e;
  padding-bottom: 80px;
  position: relative;
  top: 0;
  width: calc(100vw - 160px);
  border-bottom: 2px solid #1e1e1e;
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    width: 100%;
    padding: 40px 0;
  }
`

export const HeaderLink = styled(NavLink)`
  font-weight: 400;
  color: #1e1e1e;
  text-decoration: none;
  margin-right: 20px;
`

export const Logo = styled(LogoSVG)`
  width: 50%;
`
