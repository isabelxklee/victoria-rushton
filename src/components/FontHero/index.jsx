import React from 'react'
import {InternalLink} from '../../styles'
import {FontHeroContainer} from './styles'

const FontHero = ({font}) => (
  <FontHeroContainer>
    <p>{font.name}</p>
    <h2>{font.preview}</h2>
    <InternalLink
      to={{
        pathname: '/type',
      }}
    >
      View this font
    </InternalLink>
  </FontHeroContainer>
)

export default FontHero
