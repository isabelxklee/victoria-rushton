import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import PageTemplate from '../components/PageTemplate'

const IndexPage = () => {
  const data = useStaticQuery(pageQuery)
  const fonts = data.allContentfulFont.nodes

  return <PageTemplate>hello world</PageTemplate>
}

export default IndexPage

const pageQuery = graphql`
  query HomePageQuery {
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
