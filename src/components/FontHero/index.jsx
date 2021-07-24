import React from 'react'
import {InternalLink, Divider} from '../../styles'
import {FontHeroContainer, Content} from './styles'

const FontHero = ({font}) => (
  <FontHeroContainer>
    <Divider />
    <Content>
      <InternalLink to={`/type/${font.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <p>{font.name}</p>
        <h2>{font.preview}</h2>
        View this font
      </InternalLink>
    </Content>
  </FontHeroContainer>
)

export default FontHero
