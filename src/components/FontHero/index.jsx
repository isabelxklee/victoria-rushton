import React from 'react'
import {InternalLink, Divider} from '../../styles'
import {FontHeroContainer, Content, HeroPreview, FontHeroP, FontHeroPRight} from './styles'

const FontHero = ({font}) => (
  <FontHeroContainer>
    <Divider />
    <Content>
      <InternalLink to={`/type/${font.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <FontHeroP>{font.name}</FontHeroP>
        <FontHeroPRight>{font.styles} available styles</FontHeroPRight>
        <HeroPreview>{font.preview}</HeroPreview>
        View this font
      </InternalLink>
    </Content>
  </FontHeroContainer>
)

export default FontHero
