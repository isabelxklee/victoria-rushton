import React from 'react'
import {FontHeroContainer, FlexContainer} from '../../components/FontHero/styles'
import {PreviewText} from '../../components/FontPreview/styles'
import * as Global from '../../styles'

const Home = ({fonts}) => {
  const calculateStyles = (font) => {
    return font.weights.length * font.slants.length
  }

  return (
    <>
      {fonts.map((font) => (
        <FontHeroContainer key={font._id}>
          <Global.Padding $padding="20px 0px 0px 0px">
            <Global.InternalLink to={'/' + font.slug} key={font._id}>
              <FlexContainer>
                <Global.P>{font.title}</Global.P>
                <Global.P $right={true}>{() => calculateStyles(font)} available styles</Global.P>
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
              <Global.P>View this font</Global.P>
            </Global.InternalLink>
          </Global.Padding>
        </FontHeroContainer>
      ))}
    </>
  )
}

export default Home
