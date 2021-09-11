import React from 'react'
import {Divider} from '../../styles'
import {FontHeroContainer, Content, HeroPreview, FontHeroP, FontHeroPRight} from './styles'
import BlockContent from '@sanity/block-content-to-react'
import sanityClient from '../../client.js'

const FontHero = ({font}) => (
  <FontHeroContainer>
    <Divider />
    <Content>
      {/* <InternalLink to={`/type/${font.name.toLowerCase().replace(/\s+/g, '-')}`}> */}
      <FontHeroP>{font.title}</FontHeroP>
      <FontHeroPRight>{font.styles} available styles</FontHeroPRight>
      <HeroPreview>
        <BlockContent
          blocks={font.preview1}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
        />
      </HeroPreview>
      {/* <HeroPreview>{font.preview}</HeroPreview> */}
      View this font
      {/* </InternalLink> */}
    </Content>
  </FontHeroContainer>
)

export default FontHero
