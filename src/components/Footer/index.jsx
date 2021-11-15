import React from 'react'
import {FooterContainer} from './styles'
import {TextLink, P} from '../../styles'

const Footer = () => (
  <FooterContainer>
    <P>
      © Victoria Rushton 2021. See me on{' '}
      <TextLink href="/" rel="no_referrer" $light={true}>
        Twitter
      </TextLink>{' '}
      and{' '}
      <TextLink href="/" rel="no_referrer" $light={true}>
        Instagram.
      </TextLink>
    </P>
  </FooterContainer>
)

export default Footer
