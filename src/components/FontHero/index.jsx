import React from 'react'
import {InternalLink, Padding} from '../../styles'
import {FontHeroContainer, FontHeroP, FontHeroPRight} from './styles'
import {PreviewText} from '../FontPreview/styles'

const FontHero = ({font}) => {
  const calculateStyles = () => {
    return font.weights.length * font.slants.length
  }

  return (
    <FontHeroContainer>
      <Padding $padding="20px 0px">
        <InternalLink to={'/' + font.slug} key={font._id}>
          <FontHeroP>{font.title}</FontHeroP>
          <FontHeroPRight>{calculateStyles()} available styles</FontHeroPRight>
          <PreviewText
            $font={font.title}
            $size={font.homeTextSize}
            $weight={font.homeTextWeight}
            $slant={font.homeTextSlant}
            $lineHeight={font.homeTextLineHeight}
            $margin="100px 0"
          >
            {font.homeText}
          </PreviewText>
          <FontHeroP>View this font</FontHeroP>
        </InternalLink>
      </Padding>
    </FontHeroContainer>
  )
}

export default FontHero
