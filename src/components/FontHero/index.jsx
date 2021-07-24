import React from 'react'
import {InternalLink} from '../../styles'
import {FontHeroContainer} from './styles'

const FontHero = ({font}) => (
  <FontHeroContainer>
    <InternalLink to={`/type/${font.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <p>{font.name}</p>
      <h2>{font.preview}</h2>
      View this font
    </InternalLink>
  </FontHeroContainer>
)

export default FontHero
