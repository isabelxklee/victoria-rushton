import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import PageTemplate from '../components/PageTemplate'
import FontHero from '../components/FontHero'

const IndexPage = () => {
  const data = useStaticQuery(pageQuery)
  const fonts = data.allContentfulFont.nodes

  return (
    <PageTemplate>
      {fonts.map((font, index) => (
        <FontHero key={index} font={font} />
      ))}
    </PageTemplate>
  )
}

export default IndexPage

const pageQuery = graphql`
  query {
    allContentfulFont {
      nodes {
        name
        slug
        description {
          description
        }
        heroCopy {
          heroCopy
        }
        weights {
          name
          value
        }
      }
    }
  }
`
