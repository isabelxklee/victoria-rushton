import React from 'react'
import {FooterContainer} from './styles'
import {TextLink} from '../../styles'

const Footer = () => (
  <FooterContainer>
    <p>
      © Victoria Rushton 2021. See me on{' '}
      <TextLink href="/" rel="no_referrer">
        {' '}
        Twitter{' '}
      </TextLink>{' '}
      and{' '}
      <TextLink href="/" rel="no_referrer">
        {' '}
        Instagram.
      </TextLink>
    </p>
  </FooterContainer>
)

export default Footer
