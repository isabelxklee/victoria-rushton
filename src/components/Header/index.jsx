import React from 'react'
import {HeaderContainer} from './styles'
import {InternalLink} from '../../styles'

const Header = () => (
  <HeaderContainer>
    <InternalLink to="/">Victoria Rushton</InternalLink>
    <InternalLink to="/type">Type</InternalLink>
    <InternalLink to="/about">About</InternalLink>
  </HeaderContainer>
)

export default Header
