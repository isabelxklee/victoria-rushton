import React from 'react'
import {InternalLink, Divider, P} from '../../styles'
import {FontHeroContainer, Content, HeroPreview} from './styles'

const FontHero = ({font}) => (
  <FontHeroContainer>
    <Divider />
    <Content>
      <InternalLink to={`/type/${font.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <P>{font.name}</P>
        <HeroPreview>{font.preview}</HeroPreview>
        View this font
      </InternalLink>
    </Content>
  </FontHeroContainer>
)

export default FontHero
