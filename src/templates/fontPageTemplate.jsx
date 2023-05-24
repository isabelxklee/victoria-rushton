import React from 'react'
import {graphql} from 'gatsby'
import PageTemplate from '../components/PageTemplate'
import {FontHeroWrapper} from '../components/styles'
import {Text} from '../styles'

const FontPageTemplate = ({data}) => {
  const font = data.contentfulFont

  return (
    <PageTemplate>
      <FontHeroWrapper>
        <h1>{font.name}</h1>
        <Text>{font.description}</Text>
      </FontHeroWrapper>
      {/* preview texts */}
      {/* type tester */}
      {/* supported langauges */}
      {/* license */}
    </PageTemplate>
  )
}

export default FontPageTemplate

export const pageQuery = graphql`
  query ($slug: String!) {
    contentfulFont(slug: {eq: $slug}) {
      id
      slug
      name
      weights {
        id
        name
        value
      }
      heroCopy {
        heroCopy
      }
      description {
        description
      }
    }
  }
`
