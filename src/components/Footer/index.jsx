import React from 'react'
import {FooterContainer} from './styles'
import {TextLink, P} from '../../styles'

const Footer = () => (
  <FooterContainer>
    <P>
      © Victoria Rushton 2021. See me on{' '}
      <TextLink
        href="https://twitter.com/victoriaalissia"
        rel="no_referrer"
        $light={true}
        target="_blank"
      >
        Twitter
      </TextLink>{' '}
      and{' '}
      <TextLink
        href="https://www.instagram.com/victoriaalissia/?hl=en"
        rel="no_referrer"
        $light={true}
        target="_blank"
      >
        Instagram.
      </TextLink>
    </P>
  </FooterContainer>
)

export default Footer
