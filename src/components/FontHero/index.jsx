import React from 'react'
import {InternalLink, Padding, P} from '../../styles'
import {FontHeroContainer, FlexContainer} from './styles'
import {PreviewText} from '../FontPreview/styles'

const FontHero = ({font}) => {
  const calculateStyles = () => {
    return font.weights.length * font.slants.length
  }

  return (
    <FontHeroContainer>
      <Padding $padding="20px 0px 0px 0px">
        <InternalLink to={'/' + font.slug} key={font._id}>
          <FlexContainer>
            <P>{font.title}</P>
            <P $right={true}>{calculateStyles()} available styles</P>
          </FlexContainer>

          <PreviewText
            $font={font.title}
            $size={font.homeTextSize}
            $weight={font.homeTextWeight}
            $slant={font.homeTextSlant}
            $lineHeight={font.homeTextLineHeight}
          >
            {font.homeText}
          </PreviewText>
          <P>View this font</P>
        </InternalLink>
      </Padding>
    </FontHeroContainer>
  )
}

export default FontHero
