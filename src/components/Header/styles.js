import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const HeaderContainer = styled.div`
  color: #1e1e1e;
  padding-bottom: 80px;
  position: relative;
  top: 0;
  width: calc(100vw - 160px);
`

export const HeaderLink = styled(NavLink)`
  font-weight: 400;
  color: #1e1e1e;
  text-decoration: none;
  margin-right: 20px;
`
