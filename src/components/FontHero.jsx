import React from 'react'

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

          <Global.Margin $margin="60px 0">
            <Component.PreviewText
              $font={font.title}
              $size={font.homeTextSize}
              $weight={font.homeTextWeight}
              $slant={font.homeTextSlant}
              $lineHeight={font.homeTextLineHeight}
            >
              {font.homeText}
            </Component.PreviewText>
          </Global.Margin>
          <Global.P style={{margin: '-10px 0'}}>View this font</Global.P>
        </Global.InternalLink>
      </Global.Padding>
    </Component.FontHeroContainer>
  )
}

export default FontHero
