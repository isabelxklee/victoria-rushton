import React from 'react'
import {PreviewText} from './FontPreview/styles'
import * as Global from '../global-styles'
import * as Component from '../component-styles'

const FontHero = ({font}) => {
  const calculateStyles = () => {
    return font.weights.length * font.slants.length
  }

  return (
    <Component.FontHeroContainer key={font._id}>
      <Global.Padding $padding="20px 0px 0px 0px">
        <Global.InternalLink to={'/' + font.slug} key={font._id}>
          <Component.FlexContainer>
            <Global.P>{font.title}</Global.P>
            <Global.P $right={true}>{calculateStyles()} available styles</Global.P>
          </Component.FlexContainer>

          <PreviewText
            $font={font.title}
            $size={font.homeTextSize}
            $weight={font.homeTextWeight}
            $slant={font.homeTextSlant}
            $lineHeight={font.homeTextLineHeight}
          >
            {font.homeText}
          </PreviewText>
          <Global.P>View this font</Global.P>
        </Global.InternalLink>
      </Global.Padding>
    </Component.FontHeroContainer>
  )
}

export default FontHero
